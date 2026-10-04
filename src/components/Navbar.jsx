import { Link } from "react-router-dom";
import { Button } from "primereact/button";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                <i className="pi pi-volume-up"></i>
                <span>SoundForge</span>
            </Link>

            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">
                    <Button label="Sign Up" />
                </Link>
            </div>
        </nav>
    );
}
