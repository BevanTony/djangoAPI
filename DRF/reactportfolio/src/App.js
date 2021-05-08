import React, {useState} from 'react'
import './App.css';
import Header from './Components/Header'
import About from './Pages/About'
import Landing from './Pages/Landing';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {

  const [darkMode, setDarkMode] = useState(false)
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Heebo',
      ].join(','),
    },
  
    palette: {
        type:darkMode ? 'dark' : 'light',
        primary:{
            main:'#00bcd4',
            dark:'#0095a8',
        },
        secondary:{
            main:'#b2ff59',
        },

    }
})

const handleThemeChange = () => {
  setDarkMode(!darkMode)
}

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
     <Header darkMode={darkMode} onChange={handleThemeChange}/>
    <Router>
      <Switch>
        <Route path='/' exact render={(props) => <Landing darkMode={darkMode}/>}/>
        <Route path='/about' exact component={About}/>
      </Switch>
    </Router>
    </ThemeProvider>

    </div>
  );
}

export default App;
