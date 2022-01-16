import logo from "./img/geoda.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import "./App.scss";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Dongle", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h1" fontWeight={400}>
            En proceso
          </Typography>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
