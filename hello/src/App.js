import './App.css';
import Employee from './Components/Employee';

function App() {
  console.log("We are about to list the employee");
  const showEmployees = false;
  return (
    <div className="App">
      {console.log('inside the return')}
      <header className="App-header">
        {showEmployees ? (
          <>
            <Employee> </Employee>
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
