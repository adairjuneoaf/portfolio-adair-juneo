import styled from "styled-components";

export const Container = styled.div`
  width: 96vw;
  height: auto;

  margin: 0 auto;
`;

export const Content = styled.div`
  width: 96vw;
  height: auto;

  margin: 0 auto;
  margin-top: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  gap: 3.75rem;

  .profileInfos {
    flex: 1;
  }

  .profileProjects {
    flex: 4;

    .cardsPublications {
      margin-top: 18px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: row;

      justify-content: flex-start;
      flex-wrap: wrap;

      gap: 24px 2rem;
    }

    .cardsProjects {
      margin-top: 18px;
      display: flex;
      flex-direction: row;

      justify-content: flex-start;
      flex-wrap: wrap;

      gap: 24px 2rem;
    }
  }

  .postsPublished {
    flex: 4;
  }

  .postPage {
    flex: 4;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;

    gap: 1.875rem;

    .profileProjects {
      .cardsProjects {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 1.5rem 2rem;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;

    gap: 1.875rem;

    .profileInfos {
      flex: 0;
    }

    .profileProjects {
      flex: 0;

      .cardsProjects {
        margin-top: 18px;
        display: flex;
        flex-direction: column;
        gap: 1.5rem 2rem;
      }
    }
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    gap: 3.75rem;

    .profileInfos {
      flex: 1;
    }

    .profileProjects {
      flex: 4;

      .cardsProjects {
        margin-top: 18px;
        display: flex;
        flex-direction: row;

        justify-content: flex-start;
        flex-wrap: wrap;

        gap: 30px 2rem;
      }
    }
  }
`;
