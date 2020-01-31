import React from 'react';
import './App.css';
import Form from './components /FormComponent'
import Weather from './components /WeatherComponent'

const Api_Key = "072d16aa989b726d20052b1cf6786f43";

class App extends React.Component {

  state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=imperial`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    }else{
      this.setState({
        error: "Please input search values..."
      })
    }
  }

  render() {
    return (
      <div>
        
      <div className="wrapper">

       <div >
         <div>
           <div className="row">
             <div >
             </div>
             <div className="col-xs-7 form-container">
             <Form loadWeather={this.getWeather} />
               <Weather
                 temperature={this.state.temperature}
                 city={this.state.city}
                 country={this.state.country}
                 humidity={this.state.humidity}
                 description={this.state.description}
                 error={this.state.error}
               />
             </div>
           </div>
           <p className="header-text">THE RISE COLLECTION</p>

         </div>
       </div>
     </div>
   </div>     
    )
  }
}
export default App;