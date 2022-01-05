import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: auto;

  margin: 0 auto;

  background: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;

  margin-top: 1.875rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.875rem;

  cursor: default;

  h4 {
    color: ${(props) => props.theme.colors.text};
    span:first-child {
      color: red;
    }

    span:last-child {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
