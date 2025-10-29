import "./styles.css";

export default function App(props) {
  const handleClick = () => {
    alert(props.text);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
