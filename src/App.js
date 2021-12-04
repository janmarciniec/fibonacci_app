import './App.css';

function App() {

  function fibonacci(k) {
    if (k < 1) {
      return "Incorrect number of the element";
    }

    if (k == 1 || k == 2) {
      return 1;
    }
  
    return fibonacci(k - 1) + fibonacci(k - 2);
  }
  
  const handleSubmit=(e)=> {
    e.preventDefault();
    var k = e.target.k.value;
    var element = fibonacci(k);
    var result;

    if(k < 1) {
      result = element;
    } else {
      result = k + "th element: " + element;
    }

    e.target.result.value=result;
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>Fibonacci Sequence</p>
        
        <form onSubmit={handleSubmit}>
          <input type="number" name="k" placeholder="Nubmer of the element"/>
          <button>Show element</button>
          <br/>
          <input type="text" id="result" name="result" disabled/>
        </form>

      </header>
    </div>
  );
}

export default App;
