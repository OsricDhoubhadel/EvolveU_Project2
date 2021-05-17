import './App.css';
import ProductTable from './components/ProductTable'
import RegistrationForm from './components/RegistrationForm'

const App = () => {
  return (
    <div>
      <div className="title-bar">
        <h1>Product Registry</h1>
      </div>
      <ProductTable />
      <RegistrationForm />
    </div>
  );
};

export default App;
