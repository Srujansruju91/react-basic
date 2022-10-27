import './App.css';
import Employee from './Components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  console.log("We are about to list the employee");
  const showEmployees = true;
  return (
    <div className="App">
      {console.log('inside the return')}
      <header className="App-header">
        {showEmployees ? (
          <>
          <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}/>
            <Employee name = "HP" role="Intern"> </Employee>
            <Employee name="Lenovo" role={role} ></Employee>
            <Employee />
          </>
        ) : (
          <p>
            Hello Nag's !!!!
            <br></br>
            Hello Mani !!!
          </p>
        )
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
