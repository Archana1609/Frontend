import axios from "axios";
import { Link } from "react-router-dom";
import React,{Component} from "react";
class Table extends Component{
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8080/get').then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render()
      {
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>Model Name</th>
                        <th>Gadget Name</th>
                        <th>Brand Name</th>
                        <th>Price</th>
                        <th>Warranty</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr>
                            <td>{user.model_no}</td>
                            <td>{user.gadget}</td>
                            <td>{user.brand_name}</td>
                            <td>{user.price}</td>
                            <td>{user.warranty}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        )
            
      }
}
export default Table;