import styled from "styled-components";

export const Container = styled.section`
  width: 28rem;
  height: auto;

  padding: 1.875rem;

  background: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;

  display: flex;
  flex-direction: column;

  gap: 1.25rem;

  cursor: default;
  .titleProject {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    gap: 0.75rem;

    img {
      width: 48px;
    }

    h4 {
      font-size: 1.125rem;
    }
  }

  .descriptionProject {
    p {
      font-weight: 400;
      line-height: 1.5;
    }
  }

  .footerProject {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 0.5rem;

    .commits {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .technologies {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        width: 12px;
        height: 12px;
        background: #007acc;
        clip-path: circle();
      }

      p {
        line-height: 1.5;
        font-weight: 400;
        font-size: 1rem;
      }
    }
  }
`;
