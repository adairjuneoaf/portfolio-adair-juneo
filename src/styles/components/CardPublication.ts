import styled from "styled-components";

export const Container = styled.section`
  width: calc(50% - 1rem);
  height: 14rem;

  padding: 1.875rem;

  background: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;

  display: flex;
  flex-direction: column;

  gap: 1.125rem;

  cursor: default;

  .headerPublication {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .titlePublication {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      gap: 0.75rem;

      img {
        width: 40px;
      }

      a {
        font-size: 1.125rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.text};

        display: block;
        width: fit-content;
        height: fit-content;

        cursor: pointer;

        transition: color 0.2s;

        &:hover {
          color: ${(props) => props.theme.colors.secondary};
        }
      }
    }
  }

  .informationPublication {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    gap: 1rem;

    .datePublication {
      text-transform: capitalize;
    }

    .datePublication,
    .authorPublication,
    .readingTime {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;

      gap: 0.5rem;

      p {
        font-weight: 400;
        line-height: 1.5;
      }
    }
  }

  .subtitlePublication {
    text-align: justify;
    p {
      //font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: fit-content;
  }

  @media only screen and (min-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 1920px) {
    width: calc(50% - 1rem);
  }
`;
