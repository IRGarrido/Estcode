import { useState } from "react";
import MainHeader from "../components/MainHeader";
import Styles from "./HomePage.module.css"

export default function HomePage() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={Styles.homePage} style={{backgroundColor: darkMode? "#151520" : '#f4f4f4'}}>
            <MainHeader></MainHeader>
        </div>

    );
}