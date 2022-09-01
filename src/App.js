// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css"
import Home from "./components/pages/home/Home";



function App(){
  return (
    <>
    <div> className="App">
      <div className="flou" style {(top: '-18%', right: '0' )}></div>
      <div className="flou" style {(top: '36% ', left: '-8%' )}></div>
    </div>
    <div>Home</div> 
    </>
  )
}

export default App;