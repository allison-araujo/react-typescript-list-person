import React from "react";
import { LoadContainer, Spiner } from "./styles";

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
