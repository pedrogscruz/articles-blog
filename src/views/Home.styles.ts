import styled from 'styled-components';

export const Container = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const ContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .sort-by {
    display: flex;
    align-items: center;
    gap: .25rem;
  }
`;

export const HeaderMobile = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  overflow: auto;
  .sort-by {
    display: flex;
    align-items: center;
    white-space: nowrap;
    gap: .25rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
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
  color: #ef4444;
`; 

export const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
