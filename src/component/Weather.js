import React  from 'react';

const Weather = props => (
    
    <div className="weather__info">
      { 
        props.city && props.country && <p className="weather__key">Cidade: 
         <span className="weather__value"> { props.city}, { props.country}</span>
        </p> 
      }
      { 
        props.temperature && <p className="weather__key">Temperatura:
         <span className="weather__value"> { props.temperature} °C</span>
        </p> 
      }
      { 
        props.humidity && <p className="weather__key">Umidade:
         <span className="weather__value"> { props.humidity} g/m³</span>
        </p> 
      }
      { 
        props.description && <p className="weather__key">Condição:
         <span className="weather__value"> { props.description}</span>
        </p> 
      }
      { props.error && <p className="weather__key"> { props.error}</p> }
    </div>
    
)
export default Weather;
