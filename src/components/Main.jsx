import languages from '../data/languages'
import Button from './Button'
export default function Main(name) {

    const markupGenerator = () => {
        return (
            <div className="card"></div>
        )
    }
    return (
        <>
            <div className="container">
                {languages.map((item) => (
                    <Button key={item.id} name={item.name} />
                )
                )}


            </div>

        </>
    )
}
