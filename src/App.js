import logo from './logo.svg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './App.css';

const styles = {
  paperContainer: {
      backgroundImage: `url(${"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534457720/our-violent-ends-9781534457720_hr.jpg"})`,
      "background-size":"150px 150px",
      "background-repeat": "no-repeat"
  }
};


function App() {
  return (
    <Box
    sx={{
      display: 'flex',
      "justify-content": "center",
      "align-items": "center",
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 150,
        height: 150,
      },
    }}
  >
    <Paper style={styles.paperContainer} elevation={6} />
    <Paper elevation={6} />
    <Paper elevation={6} />

    <Paper elevation={6} />

    <Paper elevation={6} />

  </Box>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
