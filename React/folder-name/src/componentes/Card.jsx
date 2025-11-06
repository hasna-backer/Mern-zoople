// import "./Card.css";

// function Card(props) {
//   return (
//     <div className="card">
//       <img src={props.image} alt="card" />
//       <h2>{props.title}</h2>
//     </div>
//   );
// }

// export default Card;
import "./Card.css";
import sunset from "../assets/sunset.jpeg";

function Card(props) {
  return (
   
		<div className="card">
		<img src={props.image} alt="card" />
		<h2>{props.title}</h2>
  		</div>
  
  );
}

export default Card;
