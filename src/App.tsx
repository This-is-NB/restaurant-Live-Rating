
import Spinner from './components/spinner';
import './styles/index.css';
import './index.css'
import Header from './components/header';
import OrderingPage from './components/orderingPage';


const App = () => {
  return (
    <>
      <Header/>
      <Spinner/>
      <OrderingPage/>
    </>
  );
};

export default App;