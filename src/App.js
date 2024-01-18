import './App.css';
import ProductsCards from './Components/ProductsCards';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <h1>Workshop Props</h1>
    <div className='Products'>
    <ProductsCards name="Montre sport" price="220$" mark="Swatch" >
    <img src='./images/montresport.jpg' alt='Montre Sport'/>
    </ProductsCards>
    <ProductsCards name="Montre classique" price="380$" mark="Ratel" >
    <img src='./images/montreclassique.jpg' alt='Montre Classique'/>   
    </ProductsCards>
    <ProductsCards name="Montre chic" price="420$" mark="Swiss" > 
    <img src='./images/montrechic.jpg' alt='Montre Chic'/>
    </ProductsCards>
    </div>
    </div>
  );
}
export default App;
