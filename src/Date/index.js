import React, { useState } from 'react';

export default function App() {
  const [date, setDate] = useState('Today is: ----');
  const [fetchingState, setFetchingState] = useState(null);
  const [isSwipeShown, setSwipe] = useState(false);
  const Swipe = React.lazy(() =>
    import(/* webpackChunkName: 'custom-swipe-component' */ '../Swipe')
  );
  const clickHandler = async e => {
    setFetchingState(true);
    const dateFns = await import(/* webpackChunkName: 'date-fns' */ 'date-fns');
    setDate(dateFns.format(new Date(), '[Today is:] dddd'));
    setFetchingState(false);
  };
  const showSwipeHandler = () => {
    setSwipe(true);
  };
  const styles = {
    cursor: 'pointer'
  };

  return (
    <div>
      <div className="date">
        <button style={styles} onClick={clickHandler}>
          {fetchingState ? 'Loading... ' : 'Click here'}
        </button>
        <p>{date}</p>
      </div>
      <div className="swipe">
        <button style={styles} onClick={showSwipeHandler}>
          Show swipe
        </button>
        {isSwipeShown ? (
          <React.Suspense fallback={<div>Not a test</div>}>
            <Swipe />
          </React.Suspense>
        ) : null}
      </div>
    </div>
  );
}
