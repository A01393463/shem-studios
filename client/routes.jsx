import React from 'react';
import {mount} from 'react-mounter';

// import MainLayout component
import {MainLayout} from './layouts/MainLayout.jsx';
// import HomeWrapper component
import HomeWrapper from './pages/home/HomeWrapper.jsx';
import About from './pages/about/About.jsx';
import Studio from './pages/studio/Studio.jsx';
import Contact from './pages/contact/Contact.jsx';

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
      content: (<About />)
    })
  },
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
