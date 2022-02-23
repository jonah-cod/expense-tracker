import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Index = () => {
  const navigate = useNavigate();
  let doc = document.querySelector('body');
  doc.addEventListener('keypress', (e)=>{
    e.key === 'Enter' && navigate('/new')
  })
  return (
    <div className='index'>
        <h1>My expense tracker</h1>
        <NavLink to='/new'>Record expense</NavLink> <small>press <strong>ENTER</strong></small>
    </div>
  )
}

export default Index