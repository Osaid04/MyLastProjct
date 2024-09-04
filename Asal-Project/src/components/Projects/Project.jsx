import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios'; // Import axios
import './Project.css';

const Projects = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  const [projects, setProjects] = useState([]);
  const [newProjects, setNewProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newProject, setNewProject] = useState({ title: '', description: '', link: '' });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/data/db.json'); // Use axios to fetch data
        setProjects(response.data.projects); // Access the data through response.data
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const storedProjects = localStorage.getItem('newProjects');
    if (storedProjects) {
      setNewProjects(JSON.parse(storedProjects));
    }
  }, []);

  const filteredProjects = [...projects, ...newProjects].filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleAddProject = () => {
    if (newProject.title && newProject.description && newProject.link) {
      const updatedNewProjects = [...newProjects, newProject];
      setNewProjects(updatedNewProjects);
      localStorage.setItem('newProjects', JSON.stringify(updatedNewProjects));
      setNewProject({ title: '', description: '', link: '' });
    }
  };

  const handleDeleteProject = (indexToDelete) => {
    const updatedNewProjects = newProjects.filter((_, index) => index !== indexToDelete);
    setNewProjects(updatedNewProjects);
    localStorage.setItem('newProjects', JSON.stringify(updatedNewProjects));
  };

  return (
    <div className="projects-container">
      <h1>{t('projects.title')}</h1>

      <input
        type="text"
        placeholder={t('projects.searchPlaceholder')}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>{t('projects.viewProject')}</a>
            {newProjects.includes(project) && (
              <button
                className="delete-button"
                onClick={() => handleDeleteProject(newProjects.indexOf(project))}
              >
                {t('projects.deleteButton')}
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="add-project">
        <h2>{t('projects.addNewProject')}</h2>
        <input
          type="text"
          name="title"
          placeholder={t('projects.projectTitlePlaceholder')}
          value={newProject.title}
          onChange={handleInputChange}
          className="add-input"
        />
        <input
          type="text"
          name="description"
          placeholder={t('projects.projectDescriptionPlaceholder')}
          value={newProject.description}
          onChange={handleInputChange}
          className="add-input"
        />
        <input
          type="text"
          name="link"
          placeholder={t('projects.projectLinkPlaceholder')}
          value={newProject.link}
          onChange={handleInputChange}
          className="add-input"
        />
        <button onClick={handleAddProject} className="add-button">
          {t('projects.addButton')}
        </button>
      </div>
    </div>
  );
};

export default Projects;
