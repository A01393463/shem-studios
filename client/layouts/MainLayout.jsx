import React from 'react';

// MainLayout component
// passing in {content}
// export so routes can see it
export const MainLayout = ({content}) => (
  // className instead of class because class means something else in JS
  <div className="main-layout">
    <header>
      <nav>
        <h2>Shem Studios</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
	  <li><a href="/studio">Studio</a></li>
	  <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      {content}
    </main>
    <footer>
      <h2>Footer</h2>
    </footer>
  </div>
)
