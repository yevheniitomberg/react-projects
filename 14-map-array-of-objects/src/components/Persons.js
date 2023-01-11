import Person from "./Person"
import people from "../data/people"

function Persons() {
  return (
    <div className="cards">
      {people.map((person) => {
        return <Person {...person} key={person.id} />
      })}
    </div>
  )
}

export default Persons
