import styled from '@emotion/styled';
import FeedPage from 'ui/pages/FeedPage';
import IntroPage from 'ui/pages/IntroPage';
import LoadingPage from 'ui/pages/Loading';
import MainPage from 'ui/pages/Main';
import WriteCard from 'ui/pages/WriteCard';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from 'ui/molecules';
import DetailPage from 'ui/pages/DetailPage';
import Result from './ui/pages/Result';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/write" element={<WriteCard />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/card/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

export default App;
