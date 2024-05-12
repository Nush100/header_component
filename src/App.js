import Header from './Header';
import navItems from './NavItems';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Header logo={logo} icons={navItems}/>
    </div>
  );
}

export default App;
