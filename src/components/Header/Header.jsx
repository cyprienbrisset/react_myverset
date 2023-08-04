import s from "./Header.module.css";

export function Header() {
    return (
        <div className={s.title_container}>
            <div className={s.title}>
                <h1>CheckMyVerset</h1>
            </div>
        </div>
    )
}