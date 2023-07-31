import "./App.css";
import { useTheme } from "../ThemeContex";
import AppHeader from "../sections/Header";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" brand={theme.brand} theme="tema-1" mode={theme.mode}>
      <AppHeader />
    </div>
  );
}

export default App;
