import React from 'react';
import Layout from './hoc/Layout/Layout'
// import classes from './App.scss'
import EventList from './containers/Events/Events'

function App() {
  return (
    <Layout>
      <EventList />
    </Layout>
  );
}

export default App;
