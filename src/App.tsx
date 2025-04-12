import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/globalStyles';
import Home from './views/Home';
import Article from './views/Article';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:post_id" element={<Article />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
