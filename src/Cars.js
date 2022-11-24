import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SearchCar from './components/main/SearchCar';
import CarsData from './components/main/CarsData';
import {useState} from 'react';

function Cars() {
  const [input, setinput] = useState('');
  const filter = (props) => {
    return setinput(props);
  };

  return (
    <div>
      <Header />
      <SearchCar filter={filter} />
      <CarsData input={input} />
      <Footer />
    </div>
  );
}

export default Cars;
