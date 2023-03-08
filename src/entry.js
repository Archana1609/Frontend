import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";
class Get extends Component {
    constructor(props){
        super(props);
        this.state={
            model_no:'',
            gadget:'',
            brand_name:'',
            price:'',
            warranty:'',
        }
    }
handleNChange = (event) => {
    this.setState({  model_no:event.target.value});
}

handleNameChange = (event) => {
    this.setState({ gadget:event.target.value});
}
handleMsChange = (event) => {
    this.setState({ brand_name:event.target.value});
}
handleSChange = (event) => {
    this.setState({ price:event.target.value});
}
handleGChange = (event) => {
    this.setState({ warranty:event.target.value});
}

handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        
        
        model_no: this.state.model_no,
        gadget: this.state.gadget,
        brand_name: this.state.brand_name,
        price: this.state.price,
        warranty: this.state.warranty      
    }
    axios.post('http://127.0.0.1:8080/post',data)
};
render(){
    return ( 
      <div className="hi">
        <h1>ADDING GADGETS</h1>
        <br></br>
        
        

        <form onSubmit={this.handleSubmit} className="fo">
            <label className="login-label">Model Number</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.model_no}
                onChange ={this.handleNChange}
                />
                 <br></br>

            <label className="login-label">Gadget Name</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.gadget}
                onChange ={this.handleNameChange}
                />
                 <br></br>

            <label className="login-label">Brand Name</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.brand_name}
                onChange ={this.handleMsChange}
                />
                 <br></br>

            <label className="login-label">Price   </label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.price}
                onChange ={this.handleSChange}
                />
                <br></br>

            <label className="login-label">Warranty</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.warranty}
                onChange ={this.handleGChange}
                />
                 <br></br>
                 
            <button className="login-button" type="submit"> Submit </button>
            <br></br>
            <br></br>
            <button type="button" className="bbtn"><Link to="/" >Home</Link></button>
        </form>
                </div>
    );
  }
}

export default Get;