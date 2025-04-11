import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
`;

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(314px, 1fr));
  gap: 1.5rem;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: #3b82f6;
  border-bottom-color: #3b82f6;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #ef4444;
`; 