import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./style.css"

class App extends React.Component {
  render() {
    return (
        <div>
          <p>Profile</p>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
