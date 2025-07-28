// () -> returns a `button` element
function Button(data) {

    // unzip the props
    let {text} = data;

    // get the new button
    return(
        <button onClick={(event) => text="changed"}>
            {text}
        </button>
    )
}

// export it to the project
export { Button };