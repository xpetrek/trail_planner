import React, {useState} from 'react';
import QrReader from 'react-qr-reader'; 

const Scan = () => {
  const [resultData, setResultData] = useState('No result data!');

  const handleScan = data => {
    if (data) {
      setResultData(data);
      //TODO: Make it reactive, this reloads the window
      //https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page
      window.location.href=`${data}`;
    }
  }
  const handleError = err => {
    console.error(err)
  }

  return (
    <div>
    <QrReader
      delay={10}
      onError={handleError}
      onScan={handleScan}
      style={{ 
        display: 'flex',
        width: '10%'}}
    />
    <p>{resultData}</p>
  </div>
  )
};

export default Scan;
