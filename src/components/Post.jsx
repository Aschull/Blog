import React from 'react'
import TextArea from './TextArea';

const Post = ({autor}) => {
  return <>
    <p> Autor: {autor}</p>
    <TextArea />
  </>
}

export default Post;