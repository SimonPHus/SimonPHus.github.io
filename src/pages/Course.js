import { useState } from 'react';
import './Course.css';


const Course = () => {

    
    const [bottom, setBottom] = useState([
        {
            title: 'General Chemistry for Engineers',
            disc: 'Chemistry has never managed to capture my motivation in the same way as other classes. I feel that the way the field is taught is at a very surface level when compared to math and physics. With those, one usually first starts from the building blocks, such as algebra and kinematics, and uses those in further studies. Chemistry seems to teach first from a very surface level, and in higher studies then gets into the why of the processes. I enjoy having a clear understanding of things and building on that, not the other way around.',
            isExpanded: false
        },
        
      ]);

    const [courses, setCourses] = useState([
        {
            title: 'Fluid Mechanics 1',
            disc: 'I knew I would like this course long before it started. Aside from the algebraic problems being engaging, the theory behind fluid flow, and the methods engineers use to model this complex process was enjoyable enough to assure myself that I picked the correct major. Having a great professor and understanding the material of the class only added to my enjoyment, and I look forward to Fluid Mechanics 2 in the upcoming year.',
            isExpanded: false
        },
        
        {
            title: 'Signals and Transforms',
            disc: 'I was somewhat unaware of the contents of this class before the semester started, and all I have heard is that it is a challenging, math heavy class. Well, as this list shows, I rather enjoy math heavy classes. Signals and Transforms was abundantly enjoyable for me because I love classes that just explain an integral and underlying function of an essential day to day task. The tools taught in this class were exciting to learn, and will be even more exciting to use.',
            isExpanded: false
        },
        
        {
            title: 'Differential Equations',
            disc: 'Yes, I actually liked this class. The only downside is that we werent taught enough about applications of ODEs and PDEs, but I know I will have that in my upcoming classes. Aside from just plain enjoying math, this class seemed more theoretical than my other math classes, and the way it was taught somewhat opened my eyes to what higher level mathematics would look like. I was so curious about the topics hinted at in this class, I seriously looked into pursuing a minor in pure mathematics. The pragmatic engineer in me stopped me from doing so.',
            isExpanded: false
        }
      ]);




    const toggleExpand = (rowTitle) => {
        console.log(courses);
        setCourses((prevItems) =>
            prevItems.map((item) => {
                if(item.title === rowTitle){
                    let toggle = !item.isExpanded;
                    return {...item, isExpanded: toggle};
                }
                else{
                    return item;
                }
            })
        );
        console.log(courses[0].isExpanded);
    }

    const toggleExpandBottom = (rowTitle) => {
        console.log(bottom);
        setBottom((prevItems) =>
            prevItems.map((item) => {
                if(item.title === rowTitle){
                    let toggle = !item.isExpanded;
                    return {...item, isExpanded: toggle};
                }
                else{
                    return item;
                }
            })
        );
        console.log(bottom[0].isExpanded);
    }

    return (
      <div className = "Background">
      <div className = "Article">
      <h1 className = "Header">
      <br></br>&nbsp; Course Information
      </h1>
      <div className = "SubHeader">
          Often in Interviews I have been asked either my favorite or least favorite class. Here I have ranked my top three classes and least favorite class. 
          Click on the class name to read a brief description along with my reasoning for the ranking placement. <br></br>&nbsp;
      </div>

      <div className="horizontal-line"></div>
      <div className = "Spacer">
      <br></br>&nbsp;
      </div>
      <p2 className = "Rank">Top 3:</p2>
      <div className = "Spacer">
      <br></br>&nbsp;
      </div>
      <div className = "Green">
          {courses.map((course, index) => (
        <div className = "Green">
            <div className='header' onClick={() => toggleExpand(course.title)}>
                {course.title}
            </div>
            <div className={course.isExpanded ? "expanded" : "collapse"}>
                {course.disc}
            </div>
        </div>
      ))}
      </div>
      <div className = "Spacer">
      <br></br>&nbsp;
      </div>
      <p2 className = "Rank">Bottom:
    </p2>
    <div className = "Spacer">
      <br></br>&nbsp;
      </div>

      <div className = "Green">
          {bottom.map((bottom, index) => (
        <div className = "Green">
            <div className='header' onClick={() => toggleExpandBottom(bottom.title)}>
                {bottom.title}
            </div>
            <div className={bottom.isExpanded ? "expanded" : "collapse"}>
                {bottom.disc}
            </div>
        </div>
      ))}
      </div>

      <div className = "SubHeader">
      <br></br>&nbsp;
      </div>

      <div className="horizontal-line"></div>

      <div className = "SubHeader">
      <br></br>&nbsp;Full Transcript avaliable upon request. <br></br>&nbsp;
      </div>

      

      <br></br>
      
      </div>


      </div>
      
      );
  };
  
  export default Course;