import React from 'react'
import { createContext, useState, useEffect} from 'react'
import useFetch from '../hooks/useFetch';


// createContext() crea un contexto que se puede usar en cualquier componente
export const PizzasContext = createContext();

// PizzasProvider es un componente que se encarga de proveer el contexto a todos los componentes hijos
export const PizzasProvider = ({children}) => {
    // Aquí se definen los estados que se quieran compartir con los componentes hijos
    const [pizzas, setPizzas] =  useState([]);
    const [carro, setCarro] = useState([]);

    // Aquí se definen los efectos que se quieran compartir con los componentes hijos
    const {data, loading, error} = useFetch('/pizzas.json');

    useEffect(() => {
        if(data){ // Si data es tiene valor válido, entonces se ejecuta setPizzas con el valor de data
            setPizzas(data); 
        }
    }, [data]); 

    // Aquí se definen las funciones que se quieran compartir con los componentes hijos

    const agregarAlCarrito = (pizza) => {
        const encontrarPizza = carro.find(item => item.id === pizza.id); // Se busca la pizza en el carro

        // Se crea un objeto con los datos de la pizza
        const product = {
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            image: pizza.img,
            cantidad: 1,
            desc : pizza.desc
        }

        if(encontrarPizza){ // Si la pizza ya está en el carro, se aumenta la cantidad
            encontrarPizza.cantidad++;
            setCarro([...carro]);
        }else{ // Si la pizza no está en el carro, se agrega
            setCarro([...carro, product]);}

    }

    const incrementarPizza = (id) => {
        const encontrarPizza = carro.find(item => item.id === id); // Se busca la pizza en el carro
        encontrarPizza.cantidad++; // Se aumenta la cantidad de la pizza
        setCarro([...carro]); // Se actualiza el carro
    }
  

    const decrementarPizza = (id) => {
        const encontrarPizza = carro.find(item => item.id === id); // Se busca la pizza en el carro
        if(encontrarPizza.cantidad > 0){  //La pizza sólo se decrementa en caso que sea mayor a 0
            encontrarPizza.cantidad--; // Se disminuye la cantidad de la pizza
            setCarro([...carro]); // Se actualiza el carro
        }
    }

    const totalCarro = carro.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
    

    // Aquí se define el objeto que se va a compartir con los componentes hijos
    const PizzasProviderValues = {
        pizzas,
        carro,
        setCarro,
        agregarAlCarrito,
        incrementarPizza,
        decrementarPizza,
        totalCarro,
    }

    return(
        <PizzasContext.Provider value={PizzasProviderValues}>
            {children}
        </PizzasContext.Provider>
    )


}