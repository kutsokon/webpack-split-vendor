import React, { useState } from 'react';

function App() {
  const [date, setDate] = useState('Today is: ----');
  const [fetchingState, setFetchingState] = useState(null);
  const clickHandler = () => {
    setFetchingState(true);
    import(/* webpackChunkName: 'date-fns' */ 'date-fns').then(dateFns => {
      const date = dateFns.format(new Date(), '[Today is:] dddd');
      setDate(date);
      setFetchingState(false);
    });
  };
  const styles = {
    cursor: 'pointer'
  };

  return (
    <div>
      <button style={styles} onClick={clickHandler}>
        {fetchingState ? 'Loading... ' : 'Click here'}
      </button>
      <p>{date}</p>
    </div>
  );
}

export default App;
