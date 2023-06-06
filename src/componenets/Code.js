import React from "react";
// import Prism from "prismjs";
import 'prismjs/plugins/line-numbers/prism-line-numbers';

import CodeMirror from '@uiw/react-codemirror';
// import React from 'react';
import 'codemirror/theme/dracula.css';

export default function Code({ code, language }) {
  
  // useEffect(() => {
  //   Prism.highlightAll();
  // }, []);

  const onChange = React.useCallback((value, viewUpdate) => {
    
  }, []);

  return (
    <div>
    {/*
    <div className="Code " style={{marginRight:'15px',}}>
      <pre><code className={`language-${language} line-numbers`}>{code}</code></pre>
    </div>
     */}

    <CodeMirror
      value={code}
      options={{theme:'dracula',
                mode:`${language}`,
              }}
      height="300px"
      
      onChange={onChange} 
      
      />

    </div>
  );
}