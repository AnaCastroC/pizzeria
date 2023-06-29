import React from 'react'
import { PizzasContext } from '../../context/PizzasContext'
import { useContext } from 'react'

const Products = () => {

// Utilizamos el useContext para poder acceder a los datos del contexto
const {carro, incrementarPizza, decrementarPizza, totalCarro } = useContext(PizzasContext)


  return (
    <div className='container mt-5'>
        <h1 >Total carrito: {totalCarro}</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio unidad</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col" >Aumentar/Reducir</th>
                </tr>
            </thead>
            <tbody>
                {carro.map((item) => (
            <tr key={item.id}>
                <td >{item.name}</td>
                <td >${item.price}</td>
                <td >{item.cantidad}</td>
                <td>
                <button className='btn btn-primary' onClick={()=>incrementarPizza(item.id)}>+</button>
                <button className='btn btn-danger' onClick={()=>decrementarPizza(item.id)}>-</button>
                </td>
               
            </tr>
        ))}  
        </tbody>
        </table>  
    </div>
  )
}

export default Products