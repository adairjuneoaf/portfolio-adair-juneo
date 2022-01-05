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

    .cardsProjects {
      margin-top: 1.875rem;
      display: flex;
      flex-direction: row;

      justify-content: center;
      flex-wrap: wrap;

      gap: 1.5rem 2rem;
    }
  }
`;
