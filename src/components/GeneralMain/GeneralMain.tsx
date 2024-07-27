import { ReactNode } from "react";
import Styles from "./GeneralMain.module.css"

interface IProps {
    children : ReactNode
}

export default function GeneralMain(props : IProps) {
    return (
        <main className={Styles.mainContainer}>
            {props.children}
        </main>
    )
}