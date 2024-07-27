import Styles from './GeneralInput.module.css'

interface IProps {
    text: string;
    type:string;
    onChangeFunction: any;
    value?: string |number;
    placeholder?: string
    submitText?: string 
}


export default function GenenalInput(props : IProps) {
    return(
        <form className={Styles.inputContainer}>
            <label className={Styles.inputLabel}>{props.text}</label>
            <div className={Styles.inputContent}>
                <input
                    type={props.type} 
                    onChange={props.onChangeFunction} 
                    value={props.value}
                    placeholder={props.placeholder}/>
                <input type="submit" value={(props.submitText != null)? props.submitText : "Enviar"}/>
            </div>
        </form>
    )
}