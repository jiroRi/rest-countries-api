import React, { useRef, useEffect } from "react";
import styled from "styled-components";

export const Regions = (props) => {
  const selectRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", closeSelectHandler);
    return () => {
      document.removeEventListener("mousedown", closeSelectHandler);
    };
    // eslint-disable-next-line
  }, []);

  const closeSelectHandler = (event) => {
    if (selectRef.current.contains(event.target)) return;

    props.setOpened(!props.opened);
  };

  return (
    <Container {...props} ref={selectRef}>
      {props.children}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  z-index: 10000;

  display: flex;
  flex-flow: column;
  width: 100%;
  background-color: ${(props) => props.theme.componentBg};
  box-shadow: ${(props) => props.theme.boxShadow.regions};
  border-radius: 5px;
`;
