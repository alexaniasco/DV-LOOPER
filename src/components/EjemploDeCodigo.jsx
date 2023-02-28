import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark  } from 'react-syntax-highlighter/dist/esm/styles/prism';


function EjemploDeCodigo(props) {
    return (
      <div style={{maxWidth: "100%"}}>
        <SyntaxHighlighter language="javascript" style={atomDark }>
          {props.codigo}
        </SyntaxHighlighter>
      </div>
    );
  }

export default EjemploDeCodigo;