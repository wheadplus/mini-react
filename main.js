import React from "./core/React";
import ReactDOM from "./core/ReactDOM";

const app = React.createElement('div', { id: 'app' }, 'hihi ', 'mini-react');

ReactDOM.createRoot(document.getElementById('root')).render(app);
