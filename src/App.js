import './App.css';
import { BsThermometerSun } from 'react-icons/bs'
import { TiWeatherSunny } from 'react-icons/ti'
import { useState } from 'react';
import axios from "axios"

function App() {
  const [city, setCity] = useState("");
  const [info, setİnfo] = useState([]);
  const [state, setState] = useState(false);

  const handleChange = async () => {
    const api = "da754f8d4df9a4d4b464b27b78d7497c";
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;

    await axios(baseUrl).then(res => setİnfo(res.data));
    setState(true);
  }

  return (
    <>

      <div className='container-fluid home d-flex align-items-center'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 d-flex flex-column city-info justify-content-around'>
              <div className='d-flex justify-content-between align-items-center'>
                <h1 className='title'>The Weather App</h1>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleChange();
                }}>
                  <div className="mb-3 d-flex">
                    <input value={city} onChange={(e) => setCity(e.target.value)} type="text" className="search" placeholder='Şehir giriniz' />
                    <button type="submit" className="btn btn-primary">Ara</button>

                  </div>
                  
                </form>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <p className='temperature'><BsThermometerSun className='icon mb-3' />{state ? info.main.temp : null}°</p>
                <p className='city'>{state ? info.name : null}, {state ? info.sys.country : null}</p>
                <p className='temp-info text-capitalize ms-3'>{state ? info.weather[0].description : null}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
