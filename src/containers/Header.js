import React from "react";
import {Link,useHref} from 'react-router-dom'
export default function Header() {
  const Todo = useHref('/Todo')
    return (
      <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link  to='Todo' title="Todo" style={styleLink} >Todo</Link>
        <Link  to='More' title="More" style={styleLink} >More</Link>
      </header>
    );
  }
const styleLink = {
  marginInline:10,fontSize:22
}