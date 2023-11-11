//import Message from './Message'
import ListGroup from "./components/listGroup"

function App() {
  let items = [
    "Pokemon XD",
    "Resident Evil 4",
    "The Last of Us",
    "The Lion King",
  ];

  return <div><ListGroup items={items} heading={"Games"} /></div>
}

export default App