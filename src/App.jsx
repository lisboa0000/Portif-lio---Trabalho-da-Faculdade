import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contextos/LanguageContext';
import { ThemeProvider } from './contextos/ThemeContext';
import Hero from './paginas/Hero';
import Portfolio from './paginas/Portfolio';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
