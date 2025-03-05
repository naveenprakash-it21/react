import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Ensure this import is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// // Child Component 1: Car
// function Car(props) {
//   return (
//     <div>
//       <h2>{props.brand} {props.model}</h2>
//       <p>Color: {props.color}</p>
//       <p>Year: {props.year}</p>
//     </div>
//   );
// }

// // Child Component 2: Owner
// function Owner(props) {
//   return (
//     <div>
//       <h2>Owner Details:</h2>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

// // Parent Component: Garage
// function Garage() {
//   return (
//     <div>
//       <h1>Welcome to My Garage</h1>
//       {/* Passing props to multiple child components */}
//       <Car brand="Ford" model="Mustang" color="Red" year="2023" />
//       <Car brand="Tesla" model="Model S" color="White" year="2022" />
//       <Owner name="Naveen" age="20" />
//     </div>
//   );
// }

// // Mounting to the DOM
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Garage />);

// In different different container 
//-----------------------------------------------
// const element  = <h1 className ="testClass" > Welcome to React Programing ... </h1>
// const result = ReactDOM.createRoot(document.getElementById("root")); // Container 
// result.render(element);

// const newElement  = <h1 className ="testClass" > Duplicate Welcome to React Programing ... </h1>    
// const any= ReactDOM.createRoot(document.getElementById("root")); // Container 
// any.render(newElement);  ===---> If you give same elemnt in one container it will replace with the last one

// make all elements in one container
//---------------------------------------------------
/*const element = (
  <div className = "testClass">
    <h1>Welcome</h1>
    <h1>hiiiiii</h1>
  </div>
);

const result = ReactDOM.createRoot(document.getElementById("root"));
result.render(element);*/

/*class Employee extends React.Component{
  render(){
    return <div>
      <h2>Employee Details...</h2>
      <p>
        <label>Employee ID : <b>{this.props.Id}</b></label>
      </p>
      <p>
        <label>Employee Name : <b>{this.props.Name}</b></label>
      </p>
      <p>
        <label>Employee Location : <b>{this.props.Location}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{this.props.Salary}</b></label>
      </p>
    </div>
  }
}

const element=<Employee Id="1001" Name="Naveen" Location="Calcutta" Salary="99,999"></Employee>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);*/