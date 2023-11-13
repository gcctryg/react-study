//import Message from './Message'
import Alert from "./components/Alert"
import Button from "./components/Button"
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

  //Alert
  // return ( <div>
  //   <Alert>
  //     Hellow <span>World</span>
  //   </Alert>
  // </div>)

  //Button
  return (<div>
    <Button onClinck={() => console.log("clicked")}>the button</Button>
  </div>)
}

export default App