import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: auto;

  padding: 1.125rem 1.875rem;

  background: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.5rem;
  }

  button {
    border: 0;
    border-radius: 30px;
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};

    font-size: 0.875rem;

    padding: 0.75rem 1.5rem;

    transition: background-color 0.3s;

    &:hover {
      background: ${(props) => props.theme.colors.tertiary};
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 1.875rem;
  }
`;

export const Content = styled.section`
  margin-top: 1.125rem;
  margin-bottom: 1.875rem;
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  flex-wrap: wrap;

  gap: 1.5rem 2rem;
`;
