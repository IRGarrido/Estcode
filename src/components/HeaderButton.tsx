import { ReactNode } from "react";

interface IProps {
    onClickFunction : () => void;
    children : ReactNode;

}

export default function HeaderButton(props : IProps) {
    return (
        <button onClick={props.onClickFunction}>{props.children}</button>
    )
}