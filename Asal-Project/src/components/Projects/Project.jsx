import React, { useState, useEffect } from 'react';
import './Project.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newProject, setNewProject] = useState({ title: '', description: '', link: '' });

  // Fetch the projects from localStorage or JSON file
  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    } else {
      fetch('../../data/db.json')
        .then((response) => response.json())
        .then((data) => {
          setProjects(data.projects);
          localStorage.setItem('projects', JSON.stringify(data.projects));
        })
        .catch((error) => console.error('Error fetching projects:', error));
    }
  }, []);

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleAddProject = () => {
    if (newProject.title && newProject.description && newProject.link) {
      const updatedProjects = [...projects, newProject];
      setProjects(updatedProjects);
      localStorage.setItem('projects', JSON.stringify(updatedProjects)); // Update localStorage
      setNewProject({ title: '', description: '', link: '' });
    }
  };

  const handleDeleteProject = (indexToDelete) => {
    const updatedProjects = projects.filter((_, index) => index !== indexToDelete);
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects)); // Update localStorage
  };

  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
            <button 
              className="delete-button" 
              onClick={() => handleDeleteProject(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="add-project">
        <h2>Add a New Project</h2>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={newProject.title}
          onChange={handleInputChange}
          className="add-input"
        />
        <input
          type="text"
          name="description"
          placeholder="Project Description"
          value={newProject.description}
          onChange={handleInputChange}
          className="add-input"
        />
        <input
          type="text"
          name="link"
          placeholder="Project Link"
          value={newProject.link}
          onChange={handleInputChange}
          className="add-input"
        />
        <button onClick={handleAddProject} className="add-button">Add Project</button>
      </div>
    </div>
  );
};

export default Projects;
