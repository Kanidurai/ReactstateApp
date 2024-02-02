import React ,{Component} from "react";
import "./Common.css";

class ClassCounter extends Component{
    // constructor method to initialize the component state
    constructor(props){
        // pass props to parent constuctor or parent component
        super(props);
        this.state={count:0}; //initialize the state with count
    }
    // method to increment the count
    incrementCount = ()=>{
        this.setState({count:this.state.count + 10}); //increase the count value by 1 
    };
    // method to decrease the count
    decrementCount = ()=>{
        this.setState({count:0}); //set the count to 0
    };
    // render method to output jsx
    render(){
        return(
            <div className="counter-container">
                <h2 className="counter-display">Class Component Counter: {this.state.count}</h2>
                <button className="counter-button" onClick={this.incrementCount}>
                    Increment
                </button>
                <button className="counter-button" onClick={this.decrementCount}>
                    Decrement
                </button>
                <button className="counter-button" onClick={this.resetCount}>Reset</button>
            </div>
        );
    }
}

export default ClassCounter;