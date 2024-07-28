import Styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className={Styles.navbarContainer}>
            <ul className={Styles.pagesList}>
                <li>
                    <NavLink to="/motivation" end>
                        <h3>Motivação</h3>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}