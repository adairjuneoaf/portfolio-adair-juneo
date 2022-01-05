import styled from "styled-components";

export const Container = styled.section`
  width: 22rem;
  height: 18rem;

  background: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 9999px;
    width: 96px;
    height: auto;

    margin: 1rem 0;

    border: 2px solid ${(props) => props.theme.colors.secondary};
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.5;
  }

  p {
    font-size: 0.875rem;
    max-width: 16rem;
    text-align: center;
  }
`;
