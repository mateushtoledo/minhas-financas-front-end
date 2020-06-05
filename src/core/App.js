import React from 'react';

import Routes from './routes'

import 'bootswatch/dist/sandstone/bootstrap.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Routes />
      </div>
    )
  }
}

export default App;