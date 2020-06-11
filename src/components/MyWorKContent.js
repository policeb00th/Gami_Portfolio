import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'


const MyWorkContent= () =>{
    return(
        <div className="work_container" >
            <NavLink className="work_link" to='/WorkPage'>Posters</NavLink>
            <NavLink className="work_link" to='/WorkPage'>User <br/><span className="work_small">Interaction</span></NavLink>
            <NavLink className="work_link" to='/WorkPage'>3D Art</NavLink>
        </div>

    )
}

export default MyWorkContent