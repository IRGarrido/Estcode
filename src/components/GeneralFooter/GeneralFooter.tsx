import Styles from "./GeneralFooter.module.css"

export default function GeneralFooter() {



    return (
        <footer className={Styles.footerContainer} >
            <p>&copy; Copyright 2024 Ian Garrido Reis</p>
            <div className={Styles.institutions}>
                <p>Projeto Nexus PD&I</p>
                <p>Universidade do Estado do Amazonas (UEA)</p>
                <p>Foxconn</p>
            </div>

        </footer >
    )
}