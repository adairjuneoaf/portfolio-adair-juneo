import styled from "styled-components";

export const Container = styled.section`
  cursor: default;
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;

    p {
      width: fit-content;
      height: fit-content;
      padding: 0.5rem 1rem;
      font-weight: 500;
      font-size: 0.75rem;
      background: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.text};
      border-radius: 1.25rem;

      transition: background-color 0.2s;

      &:hover {
        background: ${(props) => props.theme.colors.tertiary};
      }
    }
  }
`;
