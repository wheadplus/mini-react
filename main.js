import React from "./core/React.js";
import ReactDOM from "./core/ReactDOM.js";

const App = React.createElement('div', { id: 'app' }, 'hihi ', 'mini-react');

ReactDOM.createRoot(document.getElementById('root')).render(App);
