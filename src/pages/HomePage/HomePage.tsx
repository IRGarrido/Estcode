import { useState } from "react";
import GeneralHeader from "../../components/GeneralHeader/GeneralHeader";
import GeneralMain from "../../components/GeneralMain/GeneralMain";
import InputAxios from "../../components/InputAxios/InputAxios";
import Styles from "./HomePage.module.css"
import GeneralFooter from "../../components/GeneralFooter/GeneralFooter";
import SocialShare from "../../components/SocialShare/SocialShare";


export default function HomePage() {
    const page = window.location.href

    console.log(page);

    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={Styles.homePage} style={{
            backgroundColor: darkMode ? "#151520" : '#f4f4f4'
        }}>
            <GeneralHeader darkMode={darkMode} setDarkMode={setDarkMode} />

            <GeneralMain >
                <h2 style={{ color: darkMode ? '#e0e0e0' : '#151520' }}>
                    Diga <mark style={{ color: darkMode ? '#5CE1E6' : '#00B2A9' }}>"Olá Mundo"</mark> para a computação!</h2>

                <p style={{ color: darkMode ? '#e0e0e0' : '#151520' }}>
                    A programação é um ramo vasto, repleto de diferentes tecnologias. Muitas vezes, os interessados na área se sentem perdidos, sem saber como começar. Uma solução para isso é ter onde consultar as principais linguagens de programação. </p>

                <p style={{ color: darkMode ? '#e0e0e0' : '#151520' }}>
                    Aqui, só precisamos do nome da linguagem que você quer conhecer. Vamos te ajudar com primeiro passo no mundo dev.</p>

                <h2 style={{ color: darkMode ? '#e0e0e0' : '#151520' }}>
                    Que linguagem você quer conhecer hoje?</h2>

                <InputAxios />
            </GeneralMain>

            <SocialShare url={page} />

            <GeneralFooter />
        </div>
    );
}