import './Extra.css';


import sw from '../Photos/solidworks.jpg'
import rob from '../Photos/robot.jpg'
import spark from '../Photos/tspark.jpg'
import micro from '../Photos/micro.jpg'


const Extra = () => {
    return (
      <div className = "Background">
      <div className = "Article">
      <div className = "Extra">
      <h1 className = "Header"> <br></br>&nbsp; Extra</h1>
      <p1 className = "SubHeader"> Stuff that didnt fit on my resume, but I wanted to share anyways. <br></br>&nbsp;</p1>
      <div className="horizontal-line"></div>

        <div className = "IndivHobby">
          <div className = "Text">
          <div className="Title">Solidworks Course</div>
          <p1 className="Paragraph"> At this time in my life CAD was (and still is) something that I enjoyed learning about. I couldn't 
          wait so long for my CAD class the upcoming semester, so during Christmas Break I took this short course. It was an enjoyable 
          experience, and helped give me a head start in my class.            
          </p1>
          </div>
          <img src={sw} className="Image" alt="SolidWorks Course Thumbnail" />
        </div>

        <div className="horizontal-line"></div>

        <div className = "IndivHobby">
          <div className = "Text">
          <div className="Title">Robotics Course</div>
          <p1 className="Paragraph"> Took this course to expose me to a major use case in robotics applications:
          manufacturing. The most pertinent things I learned were: firstly, to be mindful of employee and 
          community views on robitics integration. Secondly, how to effectively organize and manage a client project
          early on. Thirdly, and argueably most importantly, I learned to determine the suitability of robots in certain
          scenarios. Just because they are super cool, doesnt mean they are useful in all instances. An enlightening 
          intro class that I would recommend to anyone interested in the field. </p1>
          </div>
          <img src={rob} className="Image" alt="Certification" />
        </div>

        <div className="horizontal-line"></div>

        <div className = "IndivHobby">
          <div className = "Text">
          <div className="Title">Telus Spark Panel</div>
          <p1 className="Paragraph"> I was invited to sit on a panel discussing "The Process of Creation: Triumphs and Trials" at the &nbsp;
          <a href="https://www.sparkscience.ca/" target="_blank" rel="noopener noreferrer" className="Link">Telus Spark </a>
          &nbsp; Science Centre. The panel was a part of an adults only event in front of 200. Public speaking scares me,
          which is precisely why I did this. I discussed some of my projects and work, and talked about testing, setbacks, and planning in 
          technical projects with the other panelists. <br></br>&nbsp;
          </p1>
          </div>
          <img src={spark} className="Image" alt="Panel Shot" />
        </div>

        <div className="horizontal-line"></div>

        <div className = "IndivHobby">
          <div className = "Text">
          <div className="Title">Research Principles Micro-Certification</div>
          <p1 className="Paragraph"> A series of workshops during my summer research term that outlined best practice methods for conducting 
          tasks essential to research. I learned how acadamia collects and stores data in an unbiased and organized manner, how to develop
          technical documents and thesis papers, and how to gain ethics approvals. I also practiced oral project presentation at various times
          through these workshops. <br></br>&nbsp;
          </p1>
          </div>
          <img src={micro} className="Image" alt="Owl" />
        </div>

      </div>
      </div>
      </div>
      );
    

  };
  
  export default Extra;