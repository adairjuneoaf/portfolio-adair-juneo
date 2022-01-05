import styled from "styled-components";

export const Container = styled.section`
  width: 22rem;
  height: auto;

  margin-top: 1.875rem;
  padding: 2rem 0;

  background: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;

  h3 {
    font-size: 1.5rem;
    padding: 0 0 1.5rem 1.5rem;
  }

  .technologies {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 0.5rem 0.5rem;

    padding: 0 2.5rem;

    div {
      border-radius: 30px;
      padding: 0.5rem 1rem;
      background: ${(props) => props.theme.colors.tertiary};
      color: ${(props) => props.theme.colors.text};
      font-weight: 700;
      font-size: 0.625rem;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 30%;

      cursor: default;
    }
  }
`;
