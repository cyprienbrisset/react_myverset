import s from "./VerseCard.module.css"

export function VerseCard({verse}) {
    return (
        <div className={s.card_container}>
            <div className={s.card_content}>
                {verse?.verset.texte}
            </div>
            <div className={s.card_subtitle}>
                {verse?.verset.nom_courant} {verse?.verset.chapitre}:{verse?.verset.verset}
            </div>
        </div>
    )
}