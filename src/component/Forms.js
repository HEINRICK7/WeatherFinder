import React  from 'react';

const Forms = props =>(
    
    <form onSubmit={props.getWeather}>
        <input 
         type="text" 
         name="zip_code" 
         placeholder="Ex: 64260-000"
        />
        <input 
         type="text" 
         name="country" 
         placeholder="Ex: Brasil -> br"
        />
        <button className="">Buscar</button>
    </form>
)

export default Forms;