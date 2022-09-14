import {useState, useEffect} from 'react';


export default function People() {
    const [people, setPeople] = useState(null);
    const URL = "https://people-backend-2.herokuapp.com/people"

    const getPeople = async() => {
        try{
            const myPeople = await fetch(URL);
            const allPeople = await myPeople.json();
            setPeople(allPeople);
        }catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
      getPeople()
    
    }, [])
    
    console.log(people)

    const loading = () => (
        <section className="people-list">
          <h1>
            Loading...
            <span>
              <img
                className="spinner"
                src="https://freesvg.org/img/1544764567.png"
              />{" "}
            </span>
          </h1>
        </section>
      );

    return (
        <div className="People">
            {people ? people.map((person, idx) => {
                return(
                    <div className="people-container">
                        <h1>{person.name}</h1>
                        <img src={person.image} alt={person.name}/>
                        <p>{person.title}</p>
                    </div>
                )
            }) : <h1>{loading()}...</h1>}
        </div>
    )
}