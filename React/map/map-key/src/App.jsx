import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";



export default function App() {
  return (
    <>
          <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}


















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// function App() {
//   const names = ["Amina", "Suhail", "Gokul", "Hasna"];

//   return (
//     <div>
//       <h2>Name List</h2>

//       {names.map((name, index) => (
//         <p key={index}>{name}</p>
//       ))}
//     </div>
//   );
// }

// export default App;



























// function App() {
//   const students = [
//     { id: 1, name: "Hasna", grade: "A" },
//     { id: 2, name: "Gokul", grade: "B" },
//     { id: 3, name: "Amina", grade: "A+" },
//   ];

//   return (
//     <div>
//       <h2>Students</h2>

//       {students.map(student => (
//         <div key={student.id}>
//           <h3>{student.name}</h3>
//           <p>Grade: {student.grade}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
