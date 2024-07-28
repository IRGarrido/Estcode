import Styles from './MotivationChart.module.css'

export default function MotivationChart() {

    const personalidades = [
        {
            name: "Charles Babbage",
            title: "Inventor do computador",
            info: 'Charles Babbage (1791–1871) foi um matemático e inventor inglês.Ele projetou a Máquina Analítica, uma máquina mecânica que antecipou muitas das características dos computadores modernos, como a capacidade de realizar cálculos complexos e a utilização de um programa armazenado. Embora a Máquina Analítica nunca tenha sido completada em sua vida, o trabalho de Babbage estabeleceu as bases para a computação digital. Além de suas contribuições para a matemática e a engenharia, Babbage também se destacou como um defensor da reforma social e um crítico da administração pública de sua época.',
            image: "/CharlesBabbage.jpg"
        },
        {
            name: "Ada Lovelace",
            title: "Primeira programadora",
            info: 'Ada Lovelace (1815–1852) foi uma matemática e escritora britânica, filha do poeta Lord Byron. Ela é amplamente reconhecida como a primeira programadora de computadores devido ao seu trabalho com a Máquina Analítica de Charles Babbage. Ada escreveu notas detalhadas sobre a máquina e, em particular, uma descrição de um algoritmo para calcular números de Bernoulli usando a Máquina Analítica. Esse algoritmo é considerado o primeiro programa de computador, e suas ideias sobre a potencialidade da computação anteciparam muitos conceitos da ciência da computação moderna. Ada Lovelace é celebrada por sua visão inovadora e por sua contribuição fundamental para a história da computação.',
            image: "/AdaLovelace.webp"
        },
        {
            name: "Hendy Lamarr",
            title: "Precursora do Wi-fi e Bluetooth",
            info: "Hedy Lamarr (1914–2000) foi uma atriz e inventora austríaca-americana. Conhecida principalmente por seu trabalho no cinema de Hollywood durante a era de ouro, ela também fez uma contribuição significativa para a tecnologia. Durante a Segunda Guerra Mundial, Lamarr co-inventou um sistema de comunicação por salto de frequência, projetado para evitar a interceptação de sinais de rádio pelos inimigos. Juntamente com o compositor George Antheil, ela desenvolveu uma tecnologia que mais tarde influenciou os sistemas modernos de comunicação sem fio, como o Wi-Fi e o Bluetooth. Apesar de seu reconhecimento tardio, Lamarr é celebrada tanto por suas realizações na atuação quanto por suas inovações tecnológicas.",
            image: "/HendyLamarr.jpg"
        },
        {
            name: "Alan Turing",
            title: "Pai da ciência da computação",
            info: 'Alan Turing (1912–1954) foi um matemático, lógico e criptógrafo britânico, amplamente considerado um dos pais da ciência da computação. Ele desenvolveu o conceito da "máquina de Turing", um modelo teórico que ajuda a entender o que significa ser computável e que fundamenta a teoria da computação moderna. Turing também teve um papel crucial na quebra dos códigos de guerra nazistas, especialmente os códigos da máquina Enigma, contribuindo significativamente para a vitória dos Aliados na Segunda Guerra Mundial. Seu trabalho lançou as bases para o desenvolvimento dos primeiros computadores digitais e suas ideias ainda são fundamentais para a informática atual.',
            image: "/AlanTuring.jpg"
        }
    ]


    const Card = personalidades.map(personalidade => {
        return (
            <article className={Styles.card}>
                <h2>{personalidade.name}</h2>
                <h3>{personalidade.title}</h3>
                <p className={Styles.cardInfo}>{personalidade.info}</p>
                <img className={Styles.cardImage} src={personalidade.image} alt={`Foto de ${personalidade.name}`} />
            </article>
        )
    })

    return (
        <div className={Styles.motivationPage}>
            <h2>Eles caminharam para que você podesse voar</h2>

            <div className="cards">
                {Card}
            </div>
        </div>
    )
}