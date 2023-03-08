/*import axios from "axios";
import React, { Component } from "react";
class Table extends Component{
    state = {
        data:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/get')
        .then(response =>{
            this.setState({ data: response.data});
        })
        .catch(error => {
            console.log(error);
        });
    }
        render(){
            return(
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Gadget</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>warranty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(user =>(
                            <tr key={user.model_no}>
                                <td>{user.model_no}</td>
                                <td>{user.gadget}</td>
                                <td>{user.brand_name}</td>
                                <td>{user.price}</td>
                                <td>{user.warranty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        }
    }
    export default Table;*/