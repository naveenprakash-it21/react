import logo from './logo.svg';
import React, {useState} from 'react'; 
import './Forms.css';

class ButtonCounter extends React.Component{
      constructor(props){
        super(props);
        this.state = {count:0};
        this.handleClick=this.handleClick.bind(this); 
      }

      handleClick(){
        this.setState({
          count:this.state.count + 1
        });
      }

      render(){
        return(
          <div>
            <div>
              Button press: {this.state.count}
            </div>
            <button onClick={this.handleClick}>
              Add one
            </button>
          </div>
        );
      }
}

// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0); // state variable

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//   );
// }


// function App(){
//   function handleClick(){
//     console.log("I am working");
//   }
//   let Myevent = () => console.log("I am Working as an Arrow");
  
//   return(
//     <div>
//       <button onClick={handleClick}>login</button>
//       <button onClick={Myevent}>Arrow</button>
//     </div>
//   )
// }

// function App() {

//   const[name, setName]=useState("") ;
//   const[heading,setHeading]=useState("");

//   function handleChange(event){
//     //console.log("Nammatha");
//     //console.log(event.target.value); // n na nav
//     setName(event.target.value); // it will give value to the useState
//     //console.log(event.target.type); // text text text
//     //console.log(event.target.placeholder); // EnterName EnterName EnterName
//   }
  
//   function handleSumbit(event){
//     setHeading(name); 
//     event.preventDefault(); // broswer take as React not as html
//   }

//   return (
//     <div className ="container">
//       <h1>Hello ... {name} </h1>
//       <h1>SHello ... {heading} </h1>
//       <form onSubmit={handleSumbit}>
//       <input 
//       onChange={handleChange} // While typing it show validation in the texxt box
//       type = "text" placeholder="EnterName" value={name}/>
//       <button type="submit" 
//       >Submit</button>
//       </form>
//     </div>
//   );
// }

export default App;



