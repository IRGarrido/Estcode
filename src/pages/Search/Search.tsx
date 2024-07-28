import GeneralHeader from "../../components/GeneralHeader/GeneralHeader"

export default function Search() {
    return(
        <div style={{
            backgroundColor: darkMode? "#151520" : '#f4f4f4'}}>
            <GeneralHeader darkMode = {darkMode} setDarkMode= {setDarkMode}/>
        </div>                
    )
}