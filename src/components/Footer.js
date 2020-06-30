import React from 'react';
import styled from 'styled-components';

/* simple sticky footer css */

const Styles = styled.div`
    .footer{
        margin-top: 1rem;
        padding: 1rem;
        background-color: black;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        color: white;
  }
`;

export const Footer = () => (
  <Styles>
    <div className="footer">
    <p>© 2020-2036 This is some content in sticky footer</p>
  </div>
  </Styles>
)