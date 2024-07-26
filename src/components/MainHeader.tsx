import HeaderButton from "./HeaderButton"
import Styles from './MainHeader.module.css'

export default function MainHeader() {
    
    return (
            <header className={Styles.mainHeader}>
                <div className={Styles.headerContainer}>
                    <h1 className={Styles.mainTitle}>Est<span className={Styles.mainTitleHighlight}>.code</span></h1>
                    <div className={Styles.headerButtons}>
                        <HeaderButton onClickFunction={() => console.log("Home")}>Home</HeaderButton>
                        <HeaderButton onClickFunction={() => console.log("Mode")}>Mode</HeaderButton>
                    </div>
                </div>
            </header>        
    );
}