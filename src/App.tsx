//import Message from './Message'
import ListGroup from "./components/listGroup"

function App() {
  let items = [
    "Pokemon XD",
    "Resident Evil 4",
    "The Last of Us",
    "The Lion King",
  ];

  const handleSelectItem = (item:string) => {
    console.log(item)
  }

  return <div><ListGroup items={items} heading={"Games"} onSelectItem={handleSelectItem} /></div>
}

export default App