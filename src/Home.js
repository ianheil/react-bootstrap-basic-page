import React from 'react'
import styled from 'styled-components';


const Styles = styled.div`
  .hTwo {
    color: red;
    background-color: black;
  }
`;

export const Home = () => (
  <div>
    <h2 className="hTwo">Hello World</h2>
    <p>more stuff yeah</p>
  </div>
)
