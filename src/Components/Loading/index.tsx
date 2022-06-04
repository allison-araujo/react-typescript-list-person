import React from "react";
import { LoadContainer, Spiner } from "./styles";

// interface ILoadProps {
//   spinning: boolean;
//   children: React.ReactNode;
// }

const Loading = ({ spinning, children }: any) => {
  if (!spinning) {
    return children;
  }

  return (
    <>
      <LoadContainer>
        <Spiner />
        <Spiner />
        <Spiner />
      </LoadContainer>
    </>
  );
};

export default Loading;
