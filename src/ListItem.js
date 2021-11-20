import "./App.css";

// function Sum (props){

//     return <li>{props.item}</li>

// }
const styles = {
  ul: {
    width: "50px",
  },
};
function Sum(props) {
  return (
    <ul>
      <li>{props.persons.name}</li>
      <li>{props.persons.email}</li>
      <li>
        <img src={props.persons.imig} style={{ width: "50px"}} />
      </li>
    </ul>
  );
}

export default Sum;
