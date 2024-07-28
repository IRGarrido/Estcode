import Styles from "./GeneralFooter.module.css"

export default function GeneralFooter(){

    

    return (
        <footer className={Styles.footerContainer} >
            <p>&copy; Copyright 2024 Ian Garrido Reis</p>
            <p>Projeto Nexus PD&I - Universidade do Estado do Amazonas (UEA) - Foxconn</p>
        </footer>
    )
}