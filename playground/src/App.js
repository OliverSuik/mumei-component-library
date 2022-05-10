import logo from './logo.svg';
import './App.css';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { Status, mumeiTheme, WhiteButton } from '@oliversuik/mumei-component-library';


function App() {
  console.log(Status.NEW)
  return (
    <ThemeProvider theme={mumeiTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant='h1' fontFamily={'Sailec-Regular'} color={'textColor.primary'}>
            See on testlause
          </Typography>
          <WhiteButton color={'info'}>
            Submit New Report
          </WhiteButton>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider >
  );
}

export default App;
