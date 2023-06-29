import React, { useContext } from 'react'
import Card from '../../components/Card'
import { PizzasContext } from '../../context/PizzasContext'

const Home = () => {
    const {pizzas} = useContext(PizzasContext)
  return (
    <div>
        {pizzas && (
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {pizzas.map((pizza) => (
                    <div className='col' key={pizza.id}>
                        <Card pizza={pizza}/>
                    </div>
                ))}
            </div>
        )}

    </div>
  )
}

export default Home