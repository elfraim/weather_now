import React, { Component } from 'react';
import Input from './components/input';
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
    this.theCity = this.state.city;
    this.setState({
      city: ''
    })
    console.log(this.state.apiData, this.state.city);
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
  
  
  
  render() {
    return (
      <div className="App">
        <h1> Real Time Weather </h1>
        <Input onChange={this.onChange} onClick={this.onClick}/>
        {this.state.currentTemp} Celsius
      </div>
    );
  }
}

export default App;
