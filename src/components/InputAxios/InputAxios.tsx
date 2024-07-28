import axios from "axios";
import { ChangeEvent, useState } from "react";
import GenenalInput from "../GeneralInput/GeneralInput";
import { toast, Toaster } from "sonner";
import Styles from "./InputAxios.module.css"


export default function InputAxios() {
    const [linguagem, setLinguagem] = useState<string>("JavaScript");
    const [content, setContent] = useState<string>("");
    const [contentUrl, setContentUrl] = useState<string>("");

    const url = "https://www.searchapi.io/api/v1/search";

    const params = {
        "engine": "google",
        "q": `descrição linguagem programação ${linguagem}`,
        "location": "Brazil",
        "api_key": "yWWevt2E5gB4DHnEXf4mhvJa",
    };

    const postSearch = async () => {
        await axios.get(url, { params })
            .then(response => {

                console.log(response.status);
                console.log(response.data);

                const organicResults = response.data?.organic_results;

                const first = Array.isArray(organicResults) && organicResults.length > 0
                    ? organicResults[0]
                    : null;

                const newContent = first?.snippet != null
                    ? first.snippet
                    : "Nenhum resultado encontrado para essa entrada. Tente outra.";

                const newContentUrl = first?.link != null
                    ? first.link
                    : "#"

                setContent(newContent);
                setContentUrl(newContentUrl)
                toast.success('Resultado encontrado!')
            }).catch(error => {
                console.error("Falha na solicitacao", error);
                toast.error("Falha na solicitação")
            })
    };

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setLinguagem(e.target.value);
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.info('Pesquisa enviada. Aguarde...');
        postSearch();
    }

    const verMais = (contentUrl != "") ? <a href={contentUrl} target="_blank">   Ver Mais</a> : <></>

    return (
        <>
            <GenenalInput
                text="Eu quero conhecer..."
                type="text"
                onChangeFunction={(e: ChangeEvent<HTMLInputElement>) => handleInput(e)}
                value={linguagem}
                submitText="Descobrir"
                onClickSubmit={handleSubmit}
            />

            <div className={Styles.resultContainer} style={{ display: (content != "") ? "block" : "none" }}>
                <p className={Styles.resultContent}>{content}{verMais}</p>
            </div>

            <Toaster richColors position="bottom-right" />
        </>
    )
}