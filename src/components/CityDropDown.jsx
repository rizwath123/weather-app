import React from 'react'
import cities from '../util/cities'

const CityDropDown = ({ selectedCity, onCityChange, getCity, weatherData }) => {
    // console.log(cities);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mb-1">
                    {!weatherData && (<select className="form-select" value={selectedCity} onChange={onCityChange}>
                        <option value="">Select a City</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </select>)}
                </div>
                {!weatherData && (<div className="col-md-6">
                    <button className="btn btn-primary mt-1"
                        onClick={getCity}
                        // disabled={!selectedCity}
                    >Get Weather</button>
                </div>)}
            </div>
        </div>
    )
}
export default CityDropDown;