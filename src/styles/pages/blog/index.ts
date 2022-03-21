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
  margin-top: 1.125rem;
  margin-bottom: 1.875rem;
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  flex-wrap: wrap;

  gap: 1.5rem 2rem;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1440px) {
    flex-wrap: nowrap;
  }
`;
