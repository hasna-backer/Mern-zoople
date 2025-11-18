function ColorBox({ color, onSelect }) {

	function handleClick() {
	  onSelect(color);   // calling the function passed from parent
	}
  
	return (
	  <div
		className="color-box"
		style={{ backgroundColor: color }}
		onClick={handleClick}
	  ></div>
	);
  }
  
  export default ColorBox;
  