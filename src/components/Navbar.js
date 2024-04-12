import { Link } from 'react-router-dom';
import '../index.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary text-white">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fs-4" href="/">
                       Logo
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               <Link  className="nav-link text-white fs-4" to="/">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fs-4" to="/login">
                                    Login
                                </Link>
                            </li>
                           
                        </ul>
                        
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar;