import render from './Render';

render('app-element', `app`);

/**
 * 装载App组件
 */
const element = document.getElementById('root');
const App = document.createElement('app-element');
element.appendChild(App);
