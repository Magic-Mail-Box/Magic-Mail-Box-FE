import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import Result from './pages/Result';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Result />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div``;

export default App;
