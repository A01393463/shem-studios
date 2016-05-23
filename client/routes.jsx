import React from 'react';
import {mount} from 'react-mounter';

// import MainLayout component
import {MainLayout} from './layouts/MainLayout.jsx';
// import App component
import App from '../App.jsx';

FlowRouter.route('/', {
  // every route needs an action
  action() {
    // passes App as {content} into MainLayout
    mount(MainLayout, {
      content: (<App />)
    })
  }
});

