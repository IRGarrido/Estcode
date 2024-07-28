import { ReactNode } from "react";
import Styles from './HeaderButton.module.css'

interface IProps {
    onClickFunction?: () => void;
    children: ReactNode;
}

export default function HeaderButton(props: IProps) {
    return (
        <button onClick={props.onClickFunction} className={Styles.headerButton}>{props.children}</button>
    )
}