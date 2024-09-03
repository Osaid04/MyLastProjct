
import React from 'react';
import './main-skills.css'; 
import SkillSticker from'../../assets/png-photos/office-worker.png';
import SkillSticker2 from'../../assets/png-photos/professional-success.png';
const MainSkills = () => {
  return (
    <div className='Skills'>
      <h1>My Skills</h1>
      <p>HTML</p> 
    <div id='block-90' >90%</div>
    <div id='percent-90'></div>
    <br />
    <br />
    <p>CSS</p>
    <div id='block-85'>85%</div>
    <div id='percent-85'></div>
    <br />
    <br />
    <p>Java</p>
    <div id="block-75">75%</div>
    <div id='percent-75'></div>
    <br />
    <br />
    <p>Java Script</p>
    <div id="block-70">70%</div>
    <div id='percent-70'></div>
    <br />
    <br />
    <p>Android Studio</p>
    <div id="block-60">60%</div>
    <div id='percent-60'></div>
    <img src={SkillSticker} alt="" id='image1' />
    <img src={SkillSticker2} alt="" id='image2'/>
    <img src={SkillSticker} alt="" id='image3' />
    <img src={SkillSticker2} alt="" id="image4"/>
      </div>

  
    
  );
};

export default MainSkills;

