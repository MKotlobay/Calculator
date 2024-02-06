import './App.css';
import Button from './components/Button';
import Input from './components/Input';


function App() {
  return (
    <div className="App">
      <div>
        <Button>Clear</Button>
      </div>
      <div className='numFunc'>
        <Button sign="0"/>
        <Button sign="1"/>
        <Button sign="2"/>
        <Button sign="3"/>
        <Button sign="4"/>
        <Button sign="5"/>
        <Button sign="6"/>
        <Button sign="7"/>
        <Button sign="8"/>
        <Button sign="9"/>
        <Button sign="."/>
        <Button sign="="/>
      </div>
      <div className='calcFunc'>
        <Button sign="+" />
        <Button sign="-" />
        <Button sign="*" />
        <Button sign="/" />
      </div>
      <div>
        <Input num="0"/>
      </div>
    </div>
  );
}

export default App;
