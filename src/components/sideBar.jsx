import React from 'react';
import { NavLink} from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='side-bar'>
        <h2>menu</h2>
        <div className="menus">
            <NavLink to='/new'><i class="fas fa-layer-plus"></i> new expense</NavLink>
            <NavLink to='/expenses'><i class="fas fa-clipboard-list"></i> my expenses</NavLink>
            <NavLink to='/statistics'><i class="fas fa-analytics"></i> statistics</NavLink>
        </div>
        
    </div>
  )
}

export default SideBar