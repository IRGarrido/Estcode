import HeaderButton from "../HeaderButton/HeaderButton"
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
                    <HeaderButton onClickFunction={() => console.log("Home")}>
                        <i className="fa fa-home" style={{ fontSize: '32px' }} />
                    </HeaderButton>

                    <HeaderButton onClickFunction={() =>
                        props.setDarkMode(!props.darkMode)}>
                        {modeIcon}
                    </HeaderButton>
                </div>
            </div>

        </header>
    );
}