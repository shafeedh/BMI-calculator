import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import './App.css';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters ** 2)).toFixed(1);
    setBmi(calculatedBmi);

    if (calculatedBmi < 18.5) setStatus('Underweight');
    else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) setStatus('Normal');
    else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) setStatus('Overweight');
    else setStatus('abnormal');
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setStatus('');
  };

  return (
    <Container  style={{width:'500px',marginTop:'200px'}}>
     <div >
        <Card  className="p-4 shadow bg-secondary ">
          <h2 className="text-center ">BMI Calculator</h2>
          <Form >
            <Form.Group className="mb-3" controlId="formHeight">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your height(cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formWeight">
              <Form.Label>Weight (kg)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your weight(kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="primary" onClick={calculateBMI}>
                Calculate
              </Button>
              <Button variant="dark" onClick={resetForm}>
                Reset
              </Button>
            </div>
          </Form>
          {bmi && (
            <div className="mt-4 text-center">
              <h4>Your BMI: {bmi}</h4>
              <p>Status: <strong>{status}</strong></p>
            </div>
          )}
        </Card>
     </div>
    </Container>
  );
};

export default BMICalculator;
