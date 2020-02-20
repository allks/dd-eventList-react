import React from 'react';
import Layout from './hoc/Layout/Layout'
import EventList from './containers/EventList/EventList'

function App() {
  return (
    <Layout>
      <EventList />
    </Layout>
  );
}

export default App;
