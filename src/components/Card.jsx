import { useContext } from 'react'
import { PizzasContext } from '../context/PizzasContext'

const Card = ({pizza}) => {
    const {agregarAlCarrito, carro} = useContext(PizzasContext) // importar el contexto

    // Buscamos si la pizza está en el carrito, para posteriormente mostrar la cantidad en cada card
    const cantidadEnCarrito = carro.find((item) => item.id === pizza.id)?.cantidad || 0;

    
  return (
    <div className="card">
        <img src={pizza.img} className="card-img-top" alt={pizza.name}/>
        <div className="card-body">
            <h5 className="card-title">{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)} 
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark'>
                    {cantidadEnCarrito}
                </span>
            </h5>
            <p>Precio: {pizza.price}</p>
            <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
            <button className='btn btn-success' onClick={()=>agregarAlCarrito(pizza)}>Agregar al carrito</button>
            
        </div>
    </div>
  )
};

export default Card