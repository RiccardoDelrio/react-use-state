export default function Button({ name, key, onClick, classe, children, }) {

    return (
        <>

            <div className={`btn m-3 ${classe}`} onClick={onClick} key={key}>
                {name}
            </div >

        </>
    )
}
