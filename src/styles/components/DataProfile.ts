import styled from "styled-components";

export const Container = styled.section`
  width: 22rem;
  height: auto;
  padding: 2rem 2.5rem;

  margin-top: 1.875rem;

  background: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;

  display: flex;
  flex-direction: column;

  gap: 2rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    img {
      width: 24px;
      height: auto;
    }
    p {
      font-size: 0.875rem;
      text-align: left;
      cursor: default;

      a {
        color: ${(props) => props.theme.colors.text};
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: ${(props) => props.theme.colors.secondary};
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    width: 100%;
  }
`;
