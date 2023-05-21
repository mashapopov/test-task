import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Header, Container } from './layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>

          <StyledLink to="/tweets">Tweets</StyledLink>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
