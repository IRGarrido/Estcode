
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton, LinkedinShareButton } from "react-share"
import { FacebookIcon, WhatsappIcon, EmailIcon, LinkedinIcon } from "react-share"
import Styles from "./SocialShare.module.css"

export default function SocialShare(arg: { url: string }) {

    return (
        <>
            <p className={Styles.socialShareText}>Compartilhe</p>
            <div className={Styles.sharingContainer}>
                <FacebookShareButton url={arg.url}>
                    <FacebookIcon />
                </FacebookShareButton>
                <TwitterShareButton url={arg.url} hashtags={["Estcode", "code", "programming"]}>
                    <img src="/public/x_icon.svg" alt="Compartilhe com o X" className={Styles.logoX} />
                </TwitterShareButton>
                <WhatsappShareButton url={arg.url}>
                    <WhatsappIcon />
                </WhatsappShareButton>
                <EmailShareButton url={arg.url} subject="Estcode - Seu primeiro passo no mundo da programação">
                    <EmailIcon />
                </EmailShareButton>
                <LinkedinShareButton url={arg.url} title="Estcode - Seu primeiro passo no mundo da programação">
                    <LinkedinIcon />
                </LinkedinShareButton>
            </div>
        </>
    )
}