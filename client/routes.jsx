import React from 'react';
import {mount} from 'react-mounter';

// import MainLayout component
import {MainLayout} from './layouts/MainLayout.jsx';
// import HomeWrapper component
import HomeWrapper from './pages/home/HomeWrapper.jsx';
import AboutWrapper from './pages/about/AboutWrapper.jsx';
import StudioWrapper from './pages/studio/StudioWrapper.jsx';
import ContactWrapper from './pages/contact/ContactWrapper.jsx';

FlowRouter.route('/', {
  // every route needs an action
  action() {
    // passes App as {content} into MainLayout
    mount(MainLayout, {
      content: (<HomeWrapper />)
    })
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
      content: (<AboutWrapper />)
    })
  },
});

FlowRouter.route('/studio', {
  action() {
    mount(MainLayout, {
      content: (<StudioWrapper />)
    })
  }
});

FlowRouter.route('/contact', {
  action() {
    mount(MainLayout, {
      content: (<ContactWrapper />)
    })
  }
});
