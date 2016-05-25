import React from 'react';
import {mount} from 'react-mounter';

// import MainLayout component
import {MainLayout} from './layouts/MainLayout.jsx';
// import App component
import App from './App.jsx';
import About from './About.jsx';
import Studio from './Studio.jsx';
import Contact from './Contact.jsx';

FlowRouter.route('/', {
  // every route needs an action
  action() {
    // passes App as {content} into MainLayout
    mount(MainLayout, {
      content: (<App />)
    })
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
      content: (<About />)
    })
  }
});

FlowRouter.route('/studio', {
  action() {
    mount(MainLayout, {
      content: (<Studio />)
    })
  }
});

FlowRouter.route('/contact', {
  action() {
    mount(MainLayout, {
      content: (<Contact />)
    })
  }
});
