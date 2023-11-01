import "./App.scss";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { ProfileForm } from "./forms/ProfileForm/ProfileForm";

const App = () => {
  return (
    <ThemeContextProvider>
      <ProfileForm />
    </ThemeContextProvider>
  );
};

export default App;
