import logo from "./logo.svg";
import "./App.css";
import Time from "./NewDateFile.js";
import ListItemInchkuzem from "./ListItem.js";
// import ToDoList from "./todo/ToDoList";
import { x as y, sayHi } from "./userData";
// import * as userModule from "./userData";

function App() {
  const arr = ["test1", "test2", "test3"];
  const arr2 = ["test4", "test5", "test6"];

  const todos = [
    { id: 1, completed: false, title: "Gnal xanut" },
    { id: 2, completed: false, title: "Nkerochs kyanq@ utel" },
    { id: 3, completed: false, title: "das anel" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={sayHi()}>Click</button>
        {/* <Time /> */}

        {/* <ul>
          {" "}
          {arr.map((v) => (
            <ListItemInchkuzem item={v} />
          ))}{" "}
        </ul>
        <ol>
          {arr2.map((v) => (
            <ListItemInchkuzem item={v} />
          ))}
        </ol> */}

        <h1>
          {y.map((user) => (
            <ListItemInchkuzem persons={user} />
          ))}
        </h1>

        {/* <h1>react tutorial</h1>
        <ToDoList todos={todos} /> */}
      </header>
    </div>
  );
}

export default App;
