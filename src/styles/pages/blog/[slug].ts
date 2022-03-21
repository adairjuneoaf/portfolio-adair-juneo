import styled from "styled-components";

export const Container = styled.main`
  width: 96vw;
  height: auto;

  margin: 0 auto;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;

export const Content = styled.section`
  width: 100%;
  height: auto;

  margin: 0 auto;
  margin-top: 18px;

  padding: 1.875rem;

  background: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;

  display: flex;
  flex-direction: column;

  cursor: default;

  .informationPublicationPost {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    gap: 1rem;

    .datePublicationPost {
      text-transform: capitalize;
    }

    .datePublicationPost,
    .authorPublicationPost,
    .readingTimePost {
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

  .contentPost {
    padding: 2rem 1rem 0rem 1rem;

    h2 {
      font-size: 1.875rem;
      color: ${(props) => props.theme.colors.text};

      margin-bottom: 18px;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      text-align: justify;

      & + p {
        margin-bottom: 16px;
      }
    }

    strong {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
