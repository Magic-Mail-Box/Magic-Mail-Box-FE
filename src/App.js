import styled from '@emotion/styled';
import IntroPage from 'pages/IntroPage';
import MainPage from 'pages/Main';
import { Route, Routes } from 'react-router-dom';
import Result from './pages/Result';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div``;

export default App;
