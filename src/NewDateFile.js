import "./App.css";
function Dt() {
  let time = new Date();
  let inter = setInterval(() => {
    return time.toLocaleTimeString();
  }, 1000);
  console.log(inter);
  return (
    <div className="App">
      <header className="App-header">
        <p>{time.toLocaleTimeString()}</p>
      </header>
    </div>
  );
}
//
// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     // highlight-next-line
//     ReactDOM.render(element, document.getElementById('root'));
//   }

//   setInterval(tick, 1000);
export default Dt;
