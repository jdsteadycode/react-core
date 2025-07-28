// () -> returns FootballStar
function FootballStar(data) {
    // get the new football-star
    let {name, pic, DOB, initialImgHeight, initialImgWidth, goals, passes, about} = data;

    // new UI
    return(
        <>
            <h2>{name}</h2>
            <img 
                src={pic} 
                alt={"pic of " + name} 
                width={initialImgWidth}
                height={initialImgHeight}
            />
            <section className="star-stats">
                <h3>DOB: {DOB}</h3>
                <span>Goals: {goals} Passes: {passes}</span>
                <p>About: {about}</p>
            </section>
        </>
    );
}

// expose to the project
export {FootballStar};