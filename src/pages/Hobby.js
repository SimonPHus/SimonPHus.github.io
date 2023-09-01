import './Hobby.css';

import engineering from '../Photos/engineering.jpg'
import running from '../Photos/running.jpg'
import lego from '../Photos/lego.jpg'
import cooking from '../Photos/cooking.jpg'
import coding from '../Photos/coding.jpg'


const Hobby = () => {
    return (
      <div className = "Background">
      <div className = "Article">
      <div className = "Hobby">
      <h1 className = "Header"><br></br>&nbsp; Hobbies</h1>
      <p1 className="Sub"> This page is so you can get to know me a bit better if we haven't met in person yet. <br></br>&nbsp;</p1>

      <div className="horizontal-line"></div>

        <div className = "IndivHobby">
          <div className = "Text">
          <div className="Title">Engineering</div>
          <p1 className="Paragraph"> Wasn't sure this counted as a hobby, but considering the amount I do outside of school or work, I thought
          to include it. I love the history of the occupation and the pursuit of perfecting processes of creation and development. 
          Applying mathematics and physics principles to improve global quality of life is a profession I am excited to get into.
          Pictured: a cool graph I generated in my numerical methods class.</p1>
          </div>
          <img src={engineering} className="Image" alt="407" />
        </div>

        <div className="horizontal-line"></div>

        <div className = "IndivHobby">
          <div className = "Text">
          <div className="Title">Running</div>
          <p1 className="Paragraph"> I played multiple sports in school (basketball, rugby, track and field) but as soon as COVID hit those were
          all canceled. To continue to maintain my fitness I started to run multiple times a week. I have come to love the sport since then.
          Specifically, my body feels healthy and strong afterwards, but the mental reward is greater. The feeling of
          accomplishment after a good run is something that is yet to be matched in any other aspect of my life. I dont have any pictures
          of me running, so enjoy this one of me falling off a surfboard.</p1>
          </div>
          <img src={running} className="Image" alt="Running" />
        </div>

        <div className="horizontal-line"></div>

        <div className = "IndivHobby">
          <div className = "Text">
          <div className="Title">Lego</div>
          <p1 className="Paragraph"> Since before I can remember, I have been obsessed with these little plastic bricks, a passion I often credit as leading
          me into pursuing engineering. I have since slowed down on creating my own builds, and I show my love for lego now as more of a
          collector. The space themed sets catch my eye the most, and the Saturn V pictured here is among my favorite.</p1>
          </div>
          <img src={lego} className="Image" alt="Saturn V LEGO" />
        </div>

        <div className="horizontal-line"></div>

        <div className = "IndivHobby">
          <div className = "Text">
          <div className="Title">Cooking</div>
          <p1 className="Paragraph"> As of writing this paragraph, my cooking skills are quite poor. I am trying to get better, and am
          making steady progress. I very much enjoy cooking meals together with my girlfriend, and sometimes when I experiment on my 
          own the food is actually edible. </p1>
          </div>
          <img src={cooking} className="Image" alt="Food" />
        </div>

        <div className="horizontal-line"></div>

        <div className = "IndivHobby">
          <div className = "Text">
          <div className="Title">Programming</div>
          <p1 className="Paragraph"> My major is Mechanical Engineering, which doesnt include too much coding (MATLAB and Python) so I 
          would say that any coding outside of that is a hobby. I like programming embeded systems to run electromechanical devices, but
          learning React for this website has also been enjoyable.</p1>
          </div>
          <img src={coding} className="Image" alt="VS Code IDE" />
        </div>
      </div>
      </div>
      </div>
      );
    

  };
  
  export default Hobby;