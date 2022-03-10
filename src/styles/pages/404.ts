import styled from "styled-components";

export const Container = styled.main`
  flex: 4;

  width: 96vw;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 5rem;
    line-height: 6rem;
    font-weight: 700;

    color: ${(props) => props.theme.colors.secondary};
  }

  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: 1.5px;

    font-weight: 700;

    color: ${(props) => props.theme.colors.text};
  }

  a {
    font-size: 1rem;
    line-height: 2.5rem;

    color: ${(props) => props.theme.colors.text};

    &:hover {
      text-decoration: underline;
    }
  }
`;
