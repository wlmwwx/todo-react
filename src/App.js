// import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <a href="https://github.com/mluukkai">mluukkai</a>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

function App() {
  const now=new Date();
  const a=30
  const b=20
  return (
    <div className="App">
      <p>Hello World, it is {now.toDateString()}</p>
      <p>{a+b}</p>
      <Hello name="Maya" age={26+10}/>
      <Hello/>
      <Footer/>
    </div> 
  );
}

export default App;
