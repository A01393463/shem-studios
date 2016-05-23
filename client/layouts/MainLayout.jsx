import React from 'react';

// MainLayout component
// passing in {content}
// export so routes can see it
export const MainLayout = ({content}) => (
  // className instead of class because class means something else in JS
  <div className="main-layout">
    {content}
  </div>
)
