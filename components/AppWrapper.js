import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import { StateContextProvider } from "../state";

export default function AppWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StateContextProvider>{children}</StateContextProvider>
    </ThemeProvider>
  );
}
