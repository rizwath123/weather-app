import React from 'react';

const WeatherDetails = ({ selectedCity, weatherData, onClear }) => {
    // const {  current } = weatherData
    console.log(weatherData);
    return (
        <div>
            {weatherData && (
                <div className="container">
                    <h1 className="mt-4 ">Weather Details</h1>
                    <div className="row ">
                        <div className="col-md-6 mb-2">
                            <div className="card">
                                <div className="card-body bg-info">
                                    <h2 className="card-title">Location</h2>
                                    <p className="card-text">City: {weatherData.location.name}</p>
                                    <p className="card-text">Region: {weatherData.location.region}</p>
                                    <p className="card-text">Country: {weatherData.location.country}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-2">
                            <div className="card">
                                <div className="card-body bg-info-subtle">
                                    <h2 className="card-title">Current Weather
                                        <img src={weatherData.current.condition.icon} className="img-thumbnail ms-1" alt="..." /></h2>
                                    <p className="card-text">Temperature: {weatherData.current.temp_c}°C</p>
                                    <p className="card-text">Conditions: {weatherData.current.condition.text}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-2">
                        <button className="btn btn-danger"
                            onClick={onClear}
                        >Clear</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherDetails;