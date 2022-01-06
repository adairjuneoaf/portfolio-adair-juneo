import styled from "styled-components";

export const Container = styled.section`
  width: 28rem;
  height: 20rem;

  padding: 1.875rem;

  background: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 1.25rem;

  cursor: default;
  .titleProject {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    gap: 0.75rem;

    img {
      width: 40px;
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

      p {
        a {
          font-weight: 400;
          font-size: 0.875rem;
          color: ${(props) => props.theme.colors.text};

          transition: color 0.3s;

          &:hover {
            color: ${(props) => props.theme.colors.secondary};
          }
        }
      }
    }

    .technologies {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span.TypeScript {
        width: 12px;
        height: 12px;
        background: #007acc;
        clip-path: circle();
      }

      span.JavaScript {
        width: 12px;
        height: 12px;
        background: #f0db4f;
        clip-path: circle();
      }

      span.HTML {
        width: 12px;
        height: 12px;
        background: #f06529;
        clip-path: circle();
      }
      span.CSS {
        width: 12px;
        height: 12px;
        background: #cd6799;
        clip-path: circle();
      }

      span.other {
        width: 12px;
        height: 12px;
        background: ${(props) => props.theme.colors.secondary};
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
