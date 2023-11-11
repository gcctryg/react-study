import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = [
    "Pokemon XD",
    "Resident Evil 4",
    "The Last of Us",
    "The Lion King",
  ];
  // event handler
  const handleClick = (event:MouseEvent) => console.log(event)
  
  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
