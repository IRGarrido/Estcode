import HeaderButton from "../HeaderButton/HeaderButton"
import Navbar from "../Navbar/Navbar"
import { NavLink } from "react-router-dom";
import Styles from './GeneralHeader.module.css'


interface IProps {
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}


export default function GeneralHeader(props: IProps) {

    const modeIcon = props.darkMode
        ? <i className="fa fa-moon-o" style={{ fontSize: '32px' }} />
        : <i className="fa fa-sun-o" style={{ fontSize: '32px' }} />

    return (
        <header className={Styles.mainHeader}>
            <div className={Styles.headerContainer}>
                <div className={Styles.mainTitle}>

                    <i className={`fa fa-code ${Styles.logo}`}></i>
                    <h1 className={Styles.mainTitle}>
                        Est<span className={Styles.mainTitleHighlight}>.code</span></h1>
                </div>


                <div className={Styles.headerButtons}>

                    <NavLink to='/' end>
                        <HeaderButton>
                            <i className="fa fa-home" style={{ fontSize: '32px' }} />
                        </HeaderButton>
                    </NavLink>

                    <HeaderButton onClickFunction={() =>
                        props.setDarkMode(!props.darkMode)}>
                        {modeIcon}
                    </HeaderButton>
                </div>

            </div>
            <Navbar></Navbar>

        </header >
    );
}