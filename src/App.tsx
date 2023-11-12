//import Message from './Message'
import Alert from "./components/Alert"
import ListGroup from "./components/listGroup"

function App() {
  //ListGroup
  // let items = [
  //   "Pokemon XD",
  //   "Resident Evil 4",
  //   "The Last of Us",
  //   "The Lion King",
  // ];

  // const handleSelectItem = (item:string) => {
  //   console.log(item)
  // }

  // return <div><ListGroup items={items} heading={"Games"} onSelectItem={handleSelectItem} /></div>

  return ( <div>
    <Alert>
      Hellow <span>World</span>
    </Alert>
  </div>)

}

export default App