import './Home.css';
import home from '../Photos/home.jpg'

const Home = () => {
    return (
    <div className="Home">
    <div className="Article">
    <h1 className="Intro">Simon Hus</h1>
    <div className="horizontal-line"></div>
    <div className="Cover"></div>
    <img src={home} className="Image" alt="Portrait" />
    <div className="Cover"></div>
    <div className="horizontal-line"></div>
    <div className="Cover">
      Hello there,<br></br>&nbsp;<br></br>
      Thank you for visiting my website! I am an undergraduate student studying Mechanical Engineering with an minor in Mechantronics at the University of Calgary.
      I have held professional experiences in quantum communications, medical wearable development and thermal design.
      <br></br>&nbsp;
      <br></br> I tackled this project for a number of reasons, namely: 
      <br></br>- Curiosity towards react got the better of me
      <br></br>- The creative freedoms of a personal website over a formatted resume was something I valued
      <br></br>- I am now forced to document my career progression with more detail
      <br></br>- This will be an amazing reference in interviews (yes, this will be on my second monitor when we are meeting)
      <br></br>&nbsp;<br></br>To recruiters/hiring managers: Thank you for spending the time to visit my website. I greatly appreciate the
      interest you are showing in me and my application.
      <br></br>&nbsp;<br></br>To other students: Feel free to ask about anything you see on this site, I would love to nerd out about 
      my interests with you! 
      <br></br>&nbsp;<br></br>To all: Constructive criticism and suggestions are more than welcome. I hope you enjoy the work I have put into this project.
      <br></br>&nbsp;<br></br>Best,<br></br>&nbsp;<br></br>Simon<br></br>&nbsp;<br></br>&nbsp;
    </div>
    <div className = "Cover"></div>
    </div>
    </div>);
  };
  
  export default Home;
  