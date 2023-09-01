import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
  return (
    <div className = "Menu">
      <nav className = "Nav">
        <div className="NavBar">
          <div className="Buff"></div>
          <div className="Site">Simon Hus <br></br> Personal Website</div>
          <span>
            <Link to="/" className="Route">Home</Link>
          </span>
          <span>
            <Link to="/projects" className="Route">Projects</Link>
          </span>
          <span>
            <Link to="/course" className="Route">Courses</Link>
          </span>
          <span>
            <Link to="/hobby" className="Route">Hobbies</Link>
          </span>
          <span>
            <Link to="/contact" className="Route">Contact</Link>
          </span>
          <span>
            <Link to="/extra" className="Route">Extra</Link>
          </span>
          <div className="Buff"></div>
        </div>
      </nav>

      <div className = "Stretch">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;
