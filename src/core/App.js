import React from 'react';
import Routes from './Routes'

import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/sandstone/bootstrap.css'
import 'toastr/build/toastr.min.css'

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