import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './Demo.css';

// Use any one type of component from below 
// class based used for dynamic content componant.
// functional depends on static data layout.
 
// ================== component based component (use "this." to get props)================= 

//class Demo extends Component {
  //  render() {
    //    return <div className="demo"> 
         // <h1> Demo component {this.props.name} </h1> 
       // <p>this line won't work without wrapper</p>
      //  </div>  
    //}
//}

// =================== class based component ends ============

// ================== Functional based architecture (use "props." to get props)================= 

const Demo = (props) =>{
     
        return <div className="demo"> 
            <h1> Demo component {props.name} </h1>
        <p>this line won't work without wrapper</p>
        </div>
   
}

// =================== Functional component ends ============


export default Demo;