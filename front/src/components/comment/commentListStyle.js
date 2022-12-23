import styled, { keyframes } from 'styled-components';

export const ListBox = styled.div`
  margin-top: 30px;
  min-height: 100px;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 30px;
    li {
      font-family: 'Gamja Flower', cursive;
      border: 1px solid #000;
      padding: 20px 30px;
      color: #fff;
      background: #393e4693;
      border: 1px solid #fff;
      border-radius: 8px;
      .author {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        h3 {
          width: 85%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 18px;
        }
        button {
          color: #fff;
          background: inherit;
          font-family: 'Gamja Flower', cursive;
        }
      }
      .comment {
        font-size: 17px;
        margin-bottom: 20px;
        p {
          word-break: break-all;
        }
        .date {
        }
      }
    }
  }

`;

