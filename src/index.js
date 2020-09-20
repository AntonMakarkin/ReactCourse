import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//const elem = <h2>Hello World!</h2>
//const elem = React.createElement('h2', null, "Hello World!!")

/*const elem = (
    <div> 
      <h2>Hello World!</h2>
      <input type="text" placeholder="Type here"></input>
      <button/>
    </div>
)*/

const Header = () => {
  return <h2>Hello World!</h2>
}

const Field = () => {
  const holder = "Enter here",
        styledField = {
          width: '300px'
        }

  return <input type="text"
                style={styledField} 
                placeholder={holder}
                autoComplete=""
                className="first"
                htmlFor=""/>
}

const Btn = () => {
  const text = "Log in";
  const logged = true;
  /*const res = () => {
    return 'Log in, please'
  }*/
  //const p = <p>Log in</p>
  //return <button>{text}</button>
  //return <button>{p}</button>
  return <button>{logged ? "Enter" : text}</button>
}

const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
