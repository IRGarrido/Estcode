import HeaderButton from "../HeaderButton/HeaderButton"
import Styles from './GeneralHeader.module.css'

export default function GeneralHeader() {
    
    const darkMode = true;

    const modeIcon = darkMode? <i className="fa fa-moon-o" style={{fontSize : '32px'}}/>  :  <i className="fa fa-sun-o" style={{fontSize : '32px'}}/> 
            
    return (
            <header className={Styles.mainHeader}>
                <div className={Styles.headerContainer}>
                    <h1 className={Styles.mainTitle}>Est<span className={Styles.mainTitleHighlight}>.code</span></h1>
                    <div className={Styles.headerButtons}>
                        <HeaderButton onClickFunction={() => console.log("Home")}>
                            <i className="fa fa-home" style={{fontSize : '32px'}}/>
                            </HeaderButton>
                        <HeaderButton onClickFunction={() => console.log("Mode")}>
                            {modeIcon}
                        </HeaderButton>
                    </div>
                </div>
        
            </header>        
    );
}