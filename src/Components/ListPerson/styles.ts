import styled from "styled-components";

export const PersonName = styled.div`
  font-size: 20px;
`;
export const Thead = styled.thead`
  position: sticky;
  top: 0;
  background-color: #f6f9fc;
  color: #8493a5;
  text-decoration: none;
  font-size: 20px;
`;

export const Th = styled.th`
  border-bottom: 1px solid #dddddddd;
  padding: 10px 20px;
  word-break: break-all;
  text-align: center;
  text-decoration: none;
  color: #000;

  @media (max-width: 375px) {
    font-size: 9px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Tr = styled.tr``;

export const Tbody = styled.tbody`
  border: none;
`;

export const Td = styled.td`
  border-bottom: 1px solid #dddddddd;
  padding: 10px 20px;
  word-break: break-all;
  text-decoration: none;
  text-align: center;
  text-decoration: none;
  color: #000;

  @media (max-width: 375px) {
    font-size: 9px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const ImageBox = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 50px;

  @media (max-width: 375px) {
    height: 40px;
    width: 40px;
  }
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  min-width: 100px;
  text-decoration: none !important;
  border-collapse: collapse;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  text-decoration: none;
`;
