// src/components/Predictor.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/predictor.css';

const Predictor = () => {
  const [airTemp, setAirTemp] = useState('');
  const [processTemp, setProcessTemp] = useState('');
  const [rotationalSpeed, setRotationalSpeed] = useState('');
  const [torque, setTorque] = useState('');
  const [toolWear, setToolWear] = useState('');
  const [maintenanceTime, setMaintenanceTime] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await makePrediction();
  };

  const makePrediction = async () => {
    const inputParams = {
      airTemperature: parseFloat(airTemp),
      processTemperature: parseFloat(processTemp),
      rotationalSpeed: parseFloat(rotationalSpeed),
      torque: parseFloat(torque),
      toolWear: parseFloat(toolWear),
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', inputParams);
      setMaintenanceTime(response.data.maintenanceTime);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  useEffect(() => {
    if (airTemp && processTemp && rotationalSpeed && torque && toolWear) {
      makePrediction();
    }
  }, [airTemp, processTemp, rotationalSpeed, torque, toolWear]);

  return (
    <div className="predictor-container">
      <h1 className="header">Machine Maintenance Predictor</h1>
      <form className="predictor-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="number"
            placeholder="Air Temperature [K]"
            value={airTemp}
            onChange={(e) => setAirTemp(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Process Temperature [K]"
            value={processTemp}
            onChange={(e) => setProcessTemp(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Rotational Speed [RPM]"
            value={rotationalSpeed}
            onChange={(e) => setRotationalSpeed(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Torque [Nm]"
            value={torque}
            onChange={(e) => setTorque(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Tool Wear [min]"
            value={toolWear}
            onChange={(e) => setToolWear(e.target.value)}
            required
          />
        </div>
        <button className="predict-btn" type="submit">Predict Maintenance Time</button>
      </form>
      {maintenanceTime && (
        <div className="result">
          <h2>
            The machine will need maintenance in approximately{" "}
            {maintenanceTime.toFixed(2)} minutes of operation.
          </h2>
        </div>
      )}
    </div>
  );
};

export default Predictor;
