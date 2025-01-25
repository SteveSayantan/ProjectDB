import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer=()=>{
    return <footer className="footer footer-center bg-neutral text-neutral-content rounded p-10">
    <nav className="grid grid-flow-col gap-4">
      <Link to='/' className="link link-hover">Home</Link>
      <Link to='/gallery' className="link link-hover">Gallery</Link>
      <Link to='/about' className="link link-hover">About</Link>
      <Link to='/login' className="link link-hover">Login</Link>   
    </nav>
    <nav>
      <div className="grid grid-flow-col gap-4">
        <a href="https://x.com" target="_blank">
          <BsTwitter className="w-6 h-6"/>
        </a>
        <a href="https://youtube.com" target="_blank">
          <BsYoutube className="w-6 h-6"/>
        </a>
      </div>
    </nav>
    <aside>
      <p>Copyright &copy; {new Date().getFullYear()} - All right reserved by ProjectDB</p>
    </aside>
  </footer>
}

export default Footer;