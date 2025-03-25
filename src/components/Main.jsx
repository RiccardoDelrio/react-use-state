import languages from '../data/languages'
import Button from './Button'
import react, { useState } from 'react'
export default function Main() {
    const [language, setLanguage] = useState("")
    const [descriptionlang, setdescriptionlang] = useState("Nessun linguaggio selezionato.")

    console.log(language);

    return (
        <>
            <div className="container">
                {languages.map((item) => (
                    < Button key={item.id} name={item.name} onClick={() => setLanguage(item.name) & setdescriptionlang(item.description)} classe={language === item.name ? "btn-warning" : "btn-primary"}  >
                        {item.name}
                    </Button>
                )

                )}
                <div className="card">
                    <h2>{language}</h2>
                    {descriptionlang}
                </div>



            </div>

        </>
    )

}
