
import React, { Component } from 'react';
import Input from './components/input';
import Weather from './components/weather.js'
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    

    this.state = {
      apiData: {},
      tempDiscription: '',
      currentTemp: null,
      maxTemp: null,
      minTemp: null,
      humidity: null,
      windSpeed: null,
      city: 'Amsterdam',
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      city: e.target.value
    });
  }
  
  onClick(){
    this.fetchNewApi()
    

    if(this.state.tempDiscription === undefined){
      return <h1>NOPE</h1>
    }
    this.setState({
      city: ''
    })
  }  
  

  componentDidMount() {    
    fetch('http://api.openweathermap.org/data/2.5/' +
    `weather?q=${this.state.city}&units=metric&app` +
    'id=10154bfd8b3b9f03352847e49594239b')
          .then(result => {
            return result.json();
          }).then(data => {
            this.setState({
              apiData: data,
              tempDiscription: data.weather[0].main,
              currentTemp: data.main.temp,
              maxTemp: data.main.temp_max,
              minTemp: data.main.temp_min,
              humidity: data.main.humidity,
              windSpeed: data.wind.speed,
            })
          })
  }
  
  fetchNewApi(){
    fetch('http://api.openweathermap.org/data/2.5/' +
    `weather?q=${this.state.city}&units=metric&app` +
    'id=10154bfd8b3b9f03352847e49594239b')
          .then(result => {
            return result.json();
          }).then(data => {
            if(!data.weather){
              alert("City not found")
            } else {
            this.setState({
                apiData: data,
                tempDiscription: data.weather[0].main,
                currentTemp: data.main.temp,
                maxTemp: data.main.temp_max,
                minTemp: data.main.temp_min,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
            })}
          })
  }
  
  
  render() {
    return (
      <div className="App">
      {console.log(this.state.apiData)}
        <h1> Real Time Weather </h1>
        <Input onChange={this.onChange} onClick={this.onClick}/>
        <Weather data={this.state.apiData} />
      </div>
    );
  }
}

export default App;
