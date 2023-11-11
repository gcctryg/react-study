import { Fragment, useState } from "react";
//import { MouseEvent } from "react";

// {item: [], heading: string}
interface Props {
    items: string[]
    heading: string
}

function ListGroup({items, heading}:Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1)


//   // event handler
//   const handleClick = (event:MouseEvent) => console.log(event)
  
  return (
    <Fragment>
      <h1>{heading}</h1>
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
