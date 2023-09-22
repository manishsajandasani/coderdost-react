import './App.css';

function App() {
  let name = "My First React Application";
  let appHeaderClass = "App-header";
  console.log("App Component");
  return (
    <div className="App">
      <div className={appHeaderClass}>
        {/* This is React Expression */}
        {name}
      </div>

      {/* Use of Demo Component */}
      <Demo />
    </div>
  );
}

// This is also a component and can be used as an HTML Tag. Use it in App() Component.
function Demo() {
  console.log("Demo Component");
  return (
    <div className='App-header'>
      Demo
    </div>
  );
}

export default App;
