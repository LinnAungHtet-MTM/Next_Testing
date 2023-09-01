import '@/styles/globals.css';
import { theme } from '@/theme/theme';
import { ThemeProvider } from '@emotion/react';
import MainDashboard from '.';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainDashboard />
    </ThemeProvider>
  );
}
