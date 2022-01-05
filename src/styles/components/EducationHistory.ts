import styled from "styled-components";

export const Container = styled.section`
  width: 22rem;
  height: auto;

  padding: 2rem 0;

  margin-top: 1.875rem;

  background: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;

  h3 {
    font-size: 1.5rem;
    padding: 0 0 1.5rem 1.5rem;
  }

  .education {
    padding: 0 3.5rem;
    ul {
      li {
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.2;
        color: ${(props) => props.theme.colors.secondary};
      }
      p {
        font-size: 1rem;
        line-height: 1.5;
      }
    }
  }
`;
