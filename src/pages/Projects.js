import './Projects.css';

import jointly1 from '../Photos/jointly.jpg'
import jointly2 from '../Photos/jointly1.jpg'
import jointly3 from '../Photos/jointly2.jpg'
import jointly4 from '../Photos/jointly3.jpg'

import qkd1 from '../Photos/qkd1.jpg'
import qkd2 from '../Photos/qkd2.jpg'
import qkd3 from '../Photos/qkd3.jpg'
import qkd4 from '../Photos/qkd4.jpg'


import dart1 from '../Photos/dart1.jpg'
import dart2 from '../Photos/dart2.jpg'
import dart3 from '../Photos/dart3.jpg'
import dart4 from '../Photos/dart4.jpg'

import site1 from '../Photos/site1.jpg'
import site2 from '../Photos/site2.jpg'
import site3 from '../Photos/site3.jpg'
import site4 from '../Photos/site4.jpg'

import cbt1 from '../Photos/cbt1.jpg'
import cbt2 from '../Photos/cbt2.jpg'
import cbt3 from '../Photos/cbt3.jpg'
import cbt4 from '../Photos/cbt4.jpg'

const Projects = () => {
    return (
      <div className = "Background">
      <div className = "Article">
        <h1 className = "Header"><br></br>&nbsp; My Projects</h1>
        <p1 className = "SubHeader">Portfolio of Projects. These include both personal and paid undertakings. I would love to answer your questions about these! 
        <br></br>&nbsp;
        </p1>
        
        <div className="horizontal-line"></div>

        <div className = "IndivProject"><h1 className = "IndivTitle">Jointly Knee Rehabilitation Device <br></br>  </h1>
          <p2 className = "IndivSkills">Skills Used: C++, Python, RF Design</p2>
          <p2 className = "IndivSkills">Date: Jan 2023 - Present</p2>
          <p2 className = "IndivSkills"><br></br></p2>

          <p3 className = "IndivDesc">Along with 3 MD students, I am developing a smart-brace for post knee-surgery.
          I am in charge of the engineering of the project, including overseeing brace design, sensor and RF design to
          communicate with a computer, and embedded software design. I am also advising the development for the device
          interface for the users phone as well. I have learned and continue to learn so much about project management,
          wireless communications, software development, marketing, and leadership through the project. <br></br>&nbsp;</p3>
          <div className = "Images">
            <img src={jointly1} className="Image" alt="Jointly 1" />
            <img src={jointly2} className="Image" alt="Jointly 2" />
            <img src={jointly3} className="Image" alt="Jointly 3" />
            <img src={jointly4} className="Image" alt="Jointly 4" />
          </div>
        </div>

        <div className="horizontal-line"></div>

        <div className = "IndivProject"><h1 className = "IndivTitle">Electro-Optic System for Quantum Communications <br></br>  </h1>
          <p2 className = "IndivSkills">Skills Used: Optics, PCB Design, C++</p2>
          <p2 className = "IndivSkills">Date: May 2022 - Aug 2022</p2>
          <p2 className = "IndivSkills"><br></br></p2>

          <p3 className = "IndivDesc">REWRITE LESS FORMAL. 
          I was tasked with developing and optimizing an electrical component in an optical 
          system from scratch during my research term summer of 2022. I developed the code and circuitry for the 
          component that will be implemented into a larger 
          commercialized communication system. I worked with my team to better understand the deliverables of my task 
          and to ask for help when needed. I created both a basic report of my progress to the regulating body that was funding 
          my research and a more technical documentation for the research group to replicate my design after I left 
          the group. My progress is documented in the masters thesis of a coworker of mine. <br></br>&nbsp;</p3>
          <div className = "Images">
            <img src={qkd1} className="Image" alt="QKD 1" />
            <img src={qkd2} className="Image" alt="QKD 2" />
            <img src={qkd3} className="Image" alt="QKD 3" />
            <img src={qkd4} className="Image" alt="QKD 4" />
          </div>
        </div>

        <div className="horizontal-line"></div>


        <div className = "IndivProject"><h1 className = "IndivTitle">UAV Creation<br></br>  </h1>
          <p2 className = "IndivSkills">Skills Used: C++, SolidWorks, FEA</p2>
          <p2 className = "IndivSkills">Date: Sep 2022 - Apr 2023</p2>
          <p2 className = "IndivSkills"><br></br></p2>

          <p3 className = "IndivDesc">3 friends and me took on the challenge of creating a quadcopter drone 
          during our second year of school, and my personal motivation for this project was to demonstrate
          to myself my passion in electromechanical design (and oh did I succeed at this). On top of researching 
          and procuring parts that would work together with regards to power consumption, 
          form factor and bus interface, I was in charge
          of and suceeded in obtaining funding from the university for component purchaces. I also designed the frame and housing
          for the entire drone. Throughout working on this project, I learned about some of my strengths and 
          weaknesses, which helped me identify working points in my professional development. 
          Unfortunately, the project ended due to our electronic speed controller / flight controller
          stack not having the nessecary documentation for proper interfacing. Still, the technical skills
          I learned have been carried over into my work and other projects, and I would love to
          pick this one back up again someday. <br></br>&nbsp; </p3>
          <div className = "Images">
            <img src={dart1} className="Image" alt="DART 1" />
            <img src={dart2} className="Image" alt="DART 2" />
            <img src={dart3} className="Image" alt="DART 3" />
            <img src={dart4} className="Image" alt="DART 4" />
          </div>
        </div>

        <div className="horizontal-line"></div>



        <div className = "IndivProject"><h1 className = "IndivTitle">Personal Website <br></br>  </h1>
          <p2 className = "IndivSkills">Skills Used: React, JS/HTML/CSS, Organization</p2>
          <p2 className = "IndivSkills">Date: Jun 2023 - Aug 2023</p2>
          <p2 className = "IndivSkills"><br></br></p2>

          <p3 className = "IndivDesc">I dove into this project without any prior knowledge about web dev,
          as the only coding experience I have had so far has been in simulation and
          embedded programming. At the start, the task was confusing and at times frustrating. I had to
          recreate my entire build 3 times because I kept messing up due to my experimenting. These 
          experiments helped me understand how the files and code talk to each other and how to use the
          React framework much better. I cannot take credit for the Github host however, I had some help
          with that. Regardless, I really enjoyed this project, even if it is unlikely I will use the skills
          explicitly in my career. <br></br>&nbsp;</p3>
          <div className = "Images">
            <img src={site1} className="Image" alt="web 1" />
            <img src={site2} className="Image" alt="web 2" />
            <img src={site3} className="Image" alt="web 3" />
            <img src={site4} className="Image" alt="web 4" />
          </div>
        </div>

        <div className="horizontal-line"></div>



        <div className = "IndivProject"><h1 className = "IndivTitle">Novel Low-Energy Temperature Sensor <br></br>  </h1>
          <p2 className = "IndivSkills">Skills Used: MATLAB, LTspice, SolidWorks</p2>
          <p2 className = "IndivSkills">Date: May 2023 - Aug 2023</p2>
          <p2 className = "IndivSkills"><br></br></p2>

          <p3 className = "IndivDesc"> This project involved me in the Systems Engineering team,
          which taught me a lot about this branch of engineering.
          Based off of three research papers outlining this technology, I
          set up a MATLAB Simuation using the PDE library in MATLAB along with a
          3D prototype I created in SolidWorks. I was also excited to be able to learn how to generate an
          analtical solution for heat transfer using an analogus RC Circuit in LTspice.
          I Created a report and presented my findings for future company use.<br></br>&nbsp;</p3>
          <div className = "Images">
            <img src={cbt1} className="Image" alt="CBT 1" />
            <img src={cbt2} className="Image" alt="CBT 2" />
            <img src={cbt3} className="Image" alt="CBT 3" />
            <img src={cbt4} className="Image" alt="CBT 4" />
          </div>
        </div>

      </div>
      </div>
      );
  };
  
  export default Projects;
  