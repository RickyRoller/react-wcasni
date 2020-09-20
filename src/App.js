import React, { useState } from "react";
import "./style.css";
import { Picture } from './picture/Picture';

export default function App() {
  const [isBig, setIsBig] = useState(true);
  const [style, setStyle] = useState({});

  const onClick = () => {
    setIsBig(!isBig);
    setStyle({
      'font-size': isBig ? '65px' : '24px'
    });
  }
  
  return (
    <div>
      <h1 style={style}>Hello StackBlitz!</h1>
      <p onClick={onClick}>Yo</p>
      
      <Picture />
    </div>
  );
}
