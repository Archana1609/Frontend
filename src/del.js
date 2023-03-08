import React from 'react';  
import { Link } from "react-router-dom";   
import axios from 'axios';  


class Deletion extends React.Component
{
    state ={
        Expense:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/get')
        .then(response => {
          this.setState({ Expense: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    
    }
    async remove(model_no)
    {
        axios.delete('http://127.0.0.1:8080/del/'+model_no,
        {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        })
    
        .then(response => response.json());
    }
    render()
    {
        const {Expense} = this.state;
    const rows=
    Expense.map(Expense =>
        <tr key={Expense.id}>
            <td className="text-left">{Expense.model_no}</td>
            <td className="text-left">{Expense.gadget}</td>
            <td className="text-left">{Expense.brand_name}</td>
            <td className="text-left">{Expense.price}</td>
            <td className="text-left">{Expense.warranty}</td>
            <td><button size="sm" color="danger" onClick={() => this.remove(Expense.model_no)} onChange={Expense}>Delete</button></td>
        </tr>)


    return(
        <div>
        <div class="table-title">
        <h3>DELETE DETAILS</h3>
        </div>
        <table class="table-fill">
        <thead>
        <tr>
        <th class="text-left">Model_Number</th><br></br>
        <th class="text-left">Gadget_Name</th>
        <th class="text-left">Brand_Name</th>
        <th class="text-left">Price</th>
        <th class="text-left">Warranty</th>
        </tr>
        </thead>
                <tbody>
                   {rows}
                </tbody>
         </table>    
        </div>
    );
}
}
export default Deletion;