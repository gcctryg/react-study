import { Fragment } from "react";

function ListGroup() {
    const items = ["Pokemon XD", "Resident Evil 4", "The Last of Us", "The Lion King"]
  return (
    <Fragment>
        <h1>List</h1>
        <ul className="list-group">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
    </ul>
    </Fragment>
    
  );
}

export default ListGroup;
