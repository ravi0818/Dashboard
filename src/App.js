import React from 'react';

import Menu from './components/Menu';
import Body from './components/Body';
import Top from './components/Top';
import Sidebar from './components/Sidebar';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                  <Menu/>
            </div>
            <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
              <div>
                <Top/>
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-9"><Body/></div>
                    <div className="col-lg-3 col-md-3 col-sm-3"><Sidebar/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
