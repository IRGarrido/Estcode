import { useState } from "react";
import MainHeader from "../../components/GeneralHeader/GeneralHeader";
import GeneralMain from "../../components/GeneralMain/GeneralMain";
import InputAxios from "../../components/InputAxios";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import Styles from "./HomePage.module.css"
import GeneralFooter from "../../components/GeneralFooter/GeneralFooter";

export default function HomePage() {
    const [darkMode, setDarkMode] = useState(true);
    const [linguagem, setLinguagem] = useState("JavaScript");

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setLinguagem(e.target.value);
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(linguagem);
        
    }
    
    return (

        <div className={Styles.homePage} style={{backgroundColor: darkMode? "#151520" : '#f4f4f4'}}>
            <MainHeader></MainHeader>
            <GeneralMain>
                <h2>Diga <mark>"Olá Mundo"</mark> para a computação!</h2>
                <p>A programação é um ramo vasto, repleto de diferentes tecnologias. Muitas vezes, os interessados na área se sentem perdidos, sem saber como começar. Uma solução para isso é ter onde consultar as principais linguagens de programação. </p>
                <p>Aqui, só precisamos do nome da linguagem que você quer conhecer. Vamos te ajudar com primeiro passo no mundo dev.</p>
                <h2>Que linguagem você quer conhecer hoje?</h2>
                {/* <InputAxios/> */}
                <GeneralInput
                      text="Eu quero conhecer..."
                      type="text"
                      onChangeFunction= {handleInput}
                      value={linguagem}
                      submitText="Descobrir"
                      onClickSubmit={handleSubmit}
                    />
            </GeneralMain>
            <GeneralFooter/>
        </div>
    );
}