import React from 'react'
import {NavLink} from 'react-router-dom'
import { useContext } from 'react';
import { PizzasContext } from '../context/PizzasContext';

const Nav = () => {

    const {totalCarro} = useContext(PizzasContext);
    const setActiveClass = ({isActive}) => (isActive ? 'nav-link active fs-5 fw-bold' : 'nav-link active fw-light fs-7');
  return (

<nav className="navbar navbar-expand-lg bg-warning-subtle">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pizzería Mamma Mía! 🍕🍕 </a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink to='/' className={setActiveClass}>Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to='/products' className={setActiveClass}>Carrito</NavLink>
        </li>
     </ul>
        <a className='me-5 fs-3 text-decoration-none text-dark'>${totalCarro}🛒</a>

    </div>
  </div>
</nav>


  )
}

export default Nav