import React from 'react';





const Weather = ({ data }) => {
  if(!data.main) {
    return <h1>Loading...</h1>
  }else {
    const icon = data.weather[0].icon
    const iconLink = `http://openweathermap.org/img/w/${icon}.png`
    return(
      <div className="container ">
        <div className="row">
          <div className="col">
            <h1>{data.name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2><img src={iconLink} alt="Weather icon" />
            {data.main.temp}&#176; {data.weather[0].description}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col statsInline">
            <span>
               Max: {data.main.temp_max}&#176; /
               Min: {data.main.temp_min}&#176; /
               Humidity: {data.main.humidity}% 
            </span>
          </div>
        </div>  
      </div>
)}
    
}


export default Weather;