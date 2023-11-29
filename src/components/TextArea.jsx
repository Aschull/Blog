import React, { createContext, useEffect }from 'react'
import Button from './Button';

const TextArea = () => {
  const [content, setContent] = React.useState();

  useEffect((event) => {
    setContent(event.target.innerText);
    }, [setContent]);

  return <>
    <textarea type="text" />
    <Button name={"Submit"}/>
    <Button name={"Edit"}/>
    <Button name={"Delete"}/>
  </>   
}

export default TextArea;