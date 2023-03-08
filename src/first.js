import { Link } from "react-router-dom";
import axios from "axios";
import React,{Component} from "react";
function FirstPage (){
    return(
        <div>
          <h1>Electronic Gadgets</h1>
          
            
            <button className="playbut"><Link className="but" to='/get'>Get Gadgets</Link></button>
            <button className="playbut"><Link className="but" to='/post'>Add Gadgets</Link></button>
            <button className="playbut"><Link className="but" to='/put'>Update Gadgets</Link></button>
            <button className="playbut"><Link className="but" to='/del'>Delete Gadgets</Link></button>

          
        </div>
    );

}
export default FirstPage
