import { ColorModeContext, useMode } from "./theme"; // how the fuck do these imports work WTF?! https://www.youtube.com/watch?v=g5o-YqOHQM8
// defaults outside bracket. Anything with keyword `export` in function call within bracket.
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode(); // we have access to the theme and colormode now
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
