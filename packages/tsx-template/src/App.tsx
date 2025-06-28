import "./App.css";

function App() {
  const tsxFragment = () => {
    return <div>TestFragment</div>;
  };

  return <>{tsxFragment()}</>;
}

export default App;
