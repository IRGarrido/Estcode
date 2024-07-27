import axios from "axios";
import { ChangeEvent, useState } from "react";
import GenenalInput from "./GeneralInput/GeneralInput";
import OpenAI from "openai";


const apiKey = 'sk-None-TVqI8v1KuvECyTG2uQ1kT3BlbkFJRey4fFDfdlVTsVAqu2u6'
const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
}

export default function InputAxios() {
    const openai = new OpenAI({apiKey,
        dangerouslyAllowBrowser:true,
        organization: "Ian",
        project: "proj_HcWZyLVRwJ5o5fzOhhmmYtxZ",
    });
    console.log(openai)

    const [linguagem, setLinguagem] = useState<string>("JavaScript")
    const [content, setContent] = useState<string>("")
    const search = {
            "model" :  "gpt-3.5-turbo",
            "prompt" : `Explique, resumidamente, para que serve a linguagem de programação "${linguagem}". Se não for uma linguagem de programação ou tecnologia semelhante, retorne "Não é uma linguagem de programação".`,
            "max_tokens": 50
        }
    
    // const postSearch = async () => {
    //     axios.post<string>(openai.baseURL, search, {headers})
    //     .then(response => {
    //         console.log(response.data);
    //         setContent(response.data);
    //         console.log(content)
    //     }). catch (error => {
    //         console.error("Falha na solicitacao", error)
    //     })
    // };

    const postSearch = async () => {
        const stream = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages : [{role: "user", content: `Explique, resumidamente, para que serve a linguagem de programação "${linguagem}". Se não for uma linguagem de programação ou tecnologia semelhante, retorne "Não é uma linguagem de programação".`}],
            stream : true,
        })
        for await (const chunk of stream) {
            process.stdout.write(chunk.choices[0]?.delta?.content || "");
        }
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setLinguagem(e.target.value);
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        postSearch();
    }


    return (
        <GenenalInput
        text="Eu quero conhecer..."
        type="text"
        onChangeFunction= {(e: ChangeEvent<HTMLInputElement>) => handleInput(e)}
        value={linguagem}
        submitText="Descobrir"
        onClickSubmit={handleSubmit}
    />
    )
}