function Fate(props) {
    const characters = props.characters

    return (
        <>
            <h1>Fate characters !</h1>
            {
                characters.length > 0 && 
                <h2>
                    {characters.length} character in Fate Stay Night Animation
                </h2>
            }
        </>
    )
}

export default Fate;