import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import "../../css/navbar.css";

const Navbar = () => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <ul className="sm-menu-content">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {/* <li><Link to="/work-experience">Work Experience</Link></li> */}
                {/* <li><Link to="/skills">Skills</Link></li> */}
                <li><Link to="/contact">Contact Me</Link></li>
            </ul>
        </div>
    );
    return (
        <nav className="nav-warapper header">
            <Link to="/" className="brand-logo">Martina Magdi</Link>
            <div className="container lg-menu-content">
                <ul className="right">
                    <li><Link to="/" className="right">Home</Link></li>
                    <li><Link to="/about" className="right">About</Link></li>
                    {/* <li><Link to="/work-experience" className="right">Work Experience</Link></li> */}
                    {/* <li><Link to="/skills" className="right">Skills</Link></li> */}
                    <li><Link to="/contact" className="right">Contact Me</Link></li>
                </ul>
            </div>
            <Button onClick={toggleDrawer('left', true)} className="menu-btn">
                <i className="fas fa-ellipsis-v"></i>
            </Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </nav>
    )
}

export default Navbar
