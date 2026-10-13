import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" navbar">
      <Link to="/"> 
      <p className="text-2xl font-bold text-gradient">Resumind</p>
      </Link>
      
      <Link to="/upload" className="primary-button w-fit"> 
      Upload Resume
      </Link>
  
   </nav>
  );
}
