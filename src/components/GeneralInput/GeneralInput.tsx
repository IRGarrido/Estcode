import Styles from './GeneralInput.module.css'

interface IProps {
    text: string;
    type:string;
    onChangeFunction: any;
    value?: string |number;
    submitText?: string;
    onClickSubmit: (arg: any) => void;
}


export default function GeneralInput(props : IProps) {
    return(
        <form className={Styles.inputContainer}>
            <label className={Styles.inputLabel}>{props.text}</label>
            <div className={Styles.inputContent}>
                <input
                    type={props.type} 
                    onChange={props.onChangeFunction} 
                    value={props.value}/>
                <input type="submit" value={(props.submitText != null)? props.submitText : "Enviar"} onClick={props.onClickSubmit}/>
            </div>
        </form>
    )
}