import React, {useState} from 'react';
import Navbar from '../components/Navbar';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    console.log('I was toggled!');
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar />
    </>
  )
};

export default Home;
