import React from 'react';

export default function Swipe() {
  const ReactSwipe = React.lazy(() =>
    import(/* webpackChunkName: 'react-swipe' */ 'react-swipe')
  );

  return (
    <div>
      <React.Suspense fallback={<div>Swipe is loading...</div>}>
        <ReactSwipe className="carousel" swipeOptions={{ continuous: false }}>
          <div>PANE 1</div>
          <div>PANE 2</div>
          <div>PANE 3</div>
        </ReactSwipe>
      </React.Suspense>
    </div>
  );
}
