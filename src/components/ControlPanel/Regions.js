import React, { useRef, useEffect } from "react";
import styled from "styled-components";

export const Regions = (props) => {
  const selectRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", closeSelectHandler);
    return () => {
      document.removeEventListener("mousedown", closeSelectHandler);
    };
  }, []);

  const closeSelectHandler = (event) => {
    if (selectRef.current.contains(event.target)) return;

    props.opened(false);
  };

  return (
    <Container {...props} ref={selectRef}>
      {props.children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 160px;
`;
