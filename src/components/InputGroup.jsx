export function InputGroup({ name, value, changeHandler }) {
  return (
    <div className="input-group">
      <label>{name}</label>
      <input type="number" id="initial-investment" value={value} onChange={(e) => changeHandler(e.target.value)} />
    </div>
  );
}