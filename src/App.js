import s from "./app.module.css"
import {VerseCard} from "./components/VerseCard/VerseCard";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {useEffect, useState} from "react";
import {BibleApi} from "./api/bible.api";

function App() {

    const [verse, setVerse] = useState()

    useEffect(() => {
        setFetchedVerse()
    }, []);

    async function setFetchedVerse() {
        const fetchedVerse = await BibleApi.fetchOneVerse()
        setVerse(fetchedVerse)
    }

    return (
        <>
            <div className={s.container}>
                <Header/>
                <div className={s.content_container}>
                    {verse && <VerseCard verse={verse}/>}
                </div>
                <Footer/>
            </div>

        </>
    );
}

export default App;
