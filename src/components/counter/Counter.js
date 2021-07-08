import './Counter.scss';

function App({...props}) {
  const { add, minus, number } = props;
  return (
    <div className="counter">
      <div className="minus" onClick={minus}>-</div>
      <div className="number">{number}</div>
      <div className="add" onClick={add}>+</div>
    </div>
  );
}

export default App;
