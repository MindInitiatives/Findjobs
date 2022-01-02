import AppRouter from './AppRouter';
import './App.css'
import { useTheme,
	createTheme,
	ThemeProvider } from "@mui/material/styles";

  const theme = createTheme({
    components: {
      // Name of the component
      MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
        // Some CSS
        textTransform: "initial",
        },
      },
      },
    },
    palette: {
      primary: {
        main: '#0F4A7B', // very cyan
      },
      secondary: {
        main: '#EA5566', // very red
      },
    },
  });

function App() {
  return (
    <ThemeProvider theme={theme}>
    <AppRouter />
    </ThemeProvider>
  );
}

export default App;
