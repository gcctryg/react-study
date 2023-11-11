import { Fragment, useState } from "react";
//import { MouseEvent } from "react";

function ListGroup() {
  let items = [
    "Pokemon XD",
    "Resident Evil 4",
    "The Last of Us",
    "The Lion King",
  ];
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1)


//   // event handler
//   const handleClick = (event:MouseEvent) => console.log(event)
  
  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className= {selectedIndex === index? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => (setSelectedIndex(index))}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
