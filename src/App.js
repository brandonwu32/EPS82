import './App.css';

function App() {
  return (
    <div className="App">
      Each metazoa will be a button that will toggle something like a menu that appears from the side and gives a description

      Clicking the button will toggle the menu for THAT metazoa and then the menu appears. The function used to activate the menu
      should also take in a prop that holds an exit function that can toggle the menu off.

      Each menu components should use the same css file to make life easier. We can also have all the menu come from the same js file
      just that the component passes in props for things like animals in the family, features etc..
    </div>
  );
}

export default App;
