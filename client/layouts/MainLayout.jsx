import React from 'react';

// MainLayout component
// passing in {content}
// export so routes can see it
export const MainLayout = ({content}) => (
  // className instead of class because class means something else in JS
  <div className="main-layout">
    
    {/* navigation */}
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
	<div className="navbar-header">
	  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	    <span className="icon-bar"></span>
	    <span className="icon-bar"></span>
	    <span className="icon-bar"></span>
	  </button>
	  <a className="navbar-brand" href="/">Shem Studios</a>
	</div>
	<div className="collapse navbar-collapse" id="myNavbar">
	  <ul className="nav navbar-nav">
	    {/*<li className="active"><a href="/">Home</a></li>*/}
            <li><a href="/">Home</a></li>
	    <li><a href="/about">About</a></li>
	    <li><a href="/studio">Studio</a></li>
	    <li><a href="/contact">Contact</a></li>
	  </ul>
	</div>
      </div>
    </nav>
    
    {/* header */}
    <header>
    </header>
    
    {/* main content */}
    <main>
      {content}
    </main>
    
    {/* footer */}
    <footer>
      <h2>Footer</h2>
    </footer>
  </div>
)
