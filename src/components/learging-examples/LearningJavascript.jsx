const person = {
    name: 'frarm',
    addrres: {
        city: 'Lima',
        country: 'Peru'
    },
    profiles: ['facebook', 'twitter', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavascript(){
    return (
        <>
            <div>{person.name}</div>
            <div>{person.addrres.city}</div>
            <div>{person.addrres.country}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>

    );
}