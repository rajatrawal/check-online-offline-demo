import './App.css';
import StatusComponent from './StatusComponent ';

function App() {
  return (
    <div>
      <div className='text-center'>
        <h1>Demo App of npm package <a href="https://www.npmjs.com/package/check-online-offline">check-online-offline</a></h1>
        <h2>Turn off your network to get pop up demo.</h2>
      </div>
      <StatusComponent />
    </div>
  );
}

export default App;
