import React from 'react';
import './App.css';


import Title from './component/Title';
import Forms from './component/Forms';
import Weather from './component/Weather';

//CHAVE DE ACESSO PARA A API
const API_KEY = "8559ed9bc2fbeb160d826d1be03525cc";

class App extends React.Component{

  state = {
    temperature:'',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: '',
  }
  
  getWeather = async (e) =>{
    e.preventDefault();

    const zip_code = e.target.elements.zip_code.value;
    const country = e.target.elements.country.value;

   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip_code},${country}&appid=${API_KEY}&units=metric&lang=pt_br`);
   const data = await api_call.json();
    console.log(data);
   if(zip_code && country){
    this.setState({
      temperature: (data.main.temp).toFixed(0),
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: "",
    })  
   } else{
    this.setState({
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      description: '',
      error: "Preencha todos os Campos",
    })

   }
    
  }
  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  < Title />
                </div>
                <div className="col-xs-7 form-container">
                    < Forms getWeather={this.getWeather} />

                    < Weather 
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      error={this.state.error}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
