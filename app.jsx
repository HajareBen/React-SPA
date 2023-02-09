import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import "../App.css";

function App() {

  // State to keep track of the current step
  const [step, setStep] = useState(1);

  // State to keep track of the first name
  const [firstName, setFirstName] = useState("");

  // State to keep track of the last name
  const [lastName, setLastName] = useState("");

    // State variables to store the form data for second view
    const [dob, setDob] = useState("");
    const [healthCardNumber, setHealthCardNumber] = useState("");
  

    const [gender, setGender] = useState("")
if (step == 1) {
  return (
    <div>
        <Header/>
    <div>
      {/* Display the current step */}
      <h2>Step {step}: Name and Last Name</h2>
      <br/>
      <form>
        <div>
          {/* Label and input for first name */}
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          {/* Label and input for last name */}
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div><br/>
        {/* Button to move to the next step */}
        <button onClick={(event) => {
    event.preventDefault();

    if (!(firstName && lastName)) {
        alert("First name or Last name cannot be empty");
    } else {
        
        setStep(2);
    }
}}>Next</button>
      </form><br/>

    
    </div>
    <Footer/>
    </div>
  );}else if(step==2){
    // Helper function to validate the health card number
  const validateHealthCardNumber = (hcn) => {
    // Remove any non-numeric characters from the input
    var stripped = hcn.replace(/\D/g, "");
    if (stripped.length !== 10) {
      // HCN must be 10 digits
      return false;
    }
    // Use mod 10 to validate the HCN
    let sum = 0;
    let parity = stripped.length % 2;
    for (let i = 0; i < stripped.length; i++) {
      let digit = parseInt(stripped.charAt(i));
      
      if (i % 2 == parity) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
  
    return sum % 10 === 0;
  };

  return (
    <div>
      <h1>Personal Information</h1><br/>
      <form>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="healthCardNumber">Health Card Number:</label>
          <input
            type="text"
            id="healthCardNumber"
            value={healthCardNumber}
            onChange={(e) => setHealthCardNumber(e.target.value)}
            onBlur={(e) => {
              if (!validateHealthCardNumber(e.target.value)) {
                alert("Invalid Health Card Number");
              }
            }}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div><br/>
        <button onClick={() => setStep(2)}>Previous</button>
        <button onClick={() => setStep(3)}>Next</button>
      </form>
    </div>
  );
  }else if(step==3){

    return (
      <form>
        <div>
          <h2>Summary</h2><br/>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Date of Birth: {dob}</p>
          <p>Health Card Number: {healthCardNumber}</p>
          <p>Gender: {gender}</p>
        </div><br/>
        <button onClick={() => setStep(2)}>Previous</button>
        <button onClick={() => setStep(1)}>Home Page</button>
        </form>
        
      );
  }
}

export default App;


// Here are some examples of valid health card numbers for the app:

// 8563612004
// 
// 2222222222
// Keep in mind that the health card number must be a 10 digit number.