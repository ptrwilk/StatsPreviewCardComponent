import { createTheme, ThemeProvider } from "@mui/material";
import StatsPreviewCardComponent from "./Components/StatsPreviewCardComponent";
import "./styles.css";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    h1: {
      fontSize: 36,
    },
    h2: {
      fontSize: 24,
    },
    body1: {
      fontSize: 15,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <StatsPreviewCardComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
