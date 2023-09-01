import './Contact.css';

import qkd from '../Photos/cloud.jpg'
import pure from '../Photos/pure.jpg'

const Contact = () => {
    return (
      <div className = "Background">
      <div className = "Article">
        <h1 className = "Header"><br></br>&nbsp; Contact Me</h1>
        <div className = "Contact">
        <p1 className = "Contact">Connect on </p1>
        <a href="https://www.linkedin.com/in/simon-hus-585535227/" target="_blank" rel="noopener noreferrer" className="Link">Linkedin</a>
        <p2 className = "Contact">
        <br></br>
        <br></br>
        Email: 2003sph@gmail.com <br></br> Phone: 403 875 0648
        </p2>
        </div>
        <div className="horizontal-line"></div>
        <h2 className = "Header">
        <br></br>&nbsp; Web Presence
        </h2>

        <div className = "IndivHobby">
          <div className = "Text">
          <div className="Title">Quantum Cloud Lab</div>
          <a href="https://qcloudlab.com/people/" target="_blank" rel="noopener noreferrer" className="Link">Link</a>
          <p1 className="Paragraph"> <br></br>&nbsp; During the summer of 2022, I had the opportunity to work in the Measurement-Device-Independant Quantum
          Key Distribution (MDI-QKD) Team under Daniel Oblak. I was tasked with developing an electro-optic stabilization device to be used 
          in the commercialization of a quantum communication device made by &nbsp;
          <a href="https://www.quantizedtech.com/" target="_blank" rel="noopener noreferrer" className="Link">QTI</a>.
          <br></br>&nbsp; </p1>
          </div>
          <img src={qkd} className="Image" alt="QKD Portrait" />
        </div>

        <div className="horizontal-line"></div>

        <div className = "IndivHobby">
          <div className = "Text">
          <div className="Title">Pure Mini Story</div>
          <a href="https://taylorinstitute.ucalgary.ca/pure-awards/past-recipients" target="_blank" rel="noopener noreferrer" className="Link">Link (doesnt work)</a>
          <p1 className="Paragraph"> <br></br>&nbsp; I recieved a research award through the Program for Undergraduate Research Experience (PURE) that allowed
          me to work within the MDI-QKD team. At the end of my funded term, I was asked to share about my experiences for future recipients
          of the award. <br></br>&nbsp;</p1>
          </div>
          <img src={pure} className="Image" alt="PURE Graphic" />
        </div>

      </div>
      </div>
      );
    

  };
  
  export default Contact;
  