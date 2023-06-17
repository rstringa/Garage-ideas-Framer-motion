import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Toggle from './Toggler'

const StyledHome = styled(motion.div)`
  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
  flex-direction: column;

  button {
    margin-top: 100px;
  }

`;


export default function App() {

  return (
    <StyledHome>
      <Toggle w={200} />

      <Toggle w={200}>
        <div>
          Chau
        </div>
      </Toggle>

    </StyledHome>
  );
}
