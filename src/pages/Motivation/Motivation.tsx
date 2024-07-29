import { useState } from "react";
import Styles from './Motivation.module.css'
import GeneralHeader from "../../components/GeneralHeader/GeneralHeader";
import GeneralFooter from "../../components/GeneralFooter/GeneralFooter";
import MotivationChart from "../../components/MotivationChart/MotivationChart";
import GeneralMain from "../../components/GeneralMain/GeneralMain";



export default function Motivation() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={Styles.motivationPage} style={{
            backgroundColor: darkMode ? "#151520" : '#f4f4f4',

        }}>
            <GeneralHeader darkMode={darkMode} setDarkMode={setDarkMode} />

            <GeneralMain>
                <MotivationChart darkMode={darkMode} setDarkMode={setDarkMode} />
            </GeneralMain>
            <GeneralFooter />
        </div>
    )
}