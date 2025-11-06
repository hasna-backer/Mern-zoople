import './App.css'
import Card from './componentes/Card'
import sunset from "./assets/sunset.jpeg";
import react from "./assets/react.svg";

function Welcome() {
  return <h1>welcome gokul</h1>
}

const Button=() =>{
  return <button>click me</button>
}
 const Header=() =>{
  return <h1>header</h1>
}



function App() {

  return (
    <div className="card-container">
   <Card title="Kiran" image={react}/>
   <Card title="Hari" image={sunset}/>
   <Card title="Akshay" image={react}/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   
    {/* <Card title="Welcome 🌄" image={sunset} /> */}
    
    </div>
   
  )
}

export default App
