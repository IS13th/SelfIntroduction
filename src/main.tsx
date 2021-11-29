import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./style.css"

class App extends React.Component {
  render() {
    return (
        <div>
            <h1>自己紹介</h1>
            <h2>名前:長谷川天志</h2>
            <h2>学籍番号:k021c6002</h2>
            <h2>趣味</h2>
            <div id="fun">
                <li>ゲーム</li>
                <li>音楽鑑賞</li>
                <li>サーフィン</li>
            </div>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
