import React from 'react';
import { useParams } from 'react-router-dom';

const Featured = () => {
 let param = useParams()
  return (
    <div className="main-content">
      <h2>Featured: {param.topic}</h2>
      <p>Introducing <strong>{param.topic}</strong>, a teacher who loves teaching courses about <strong>{param.moully}</strong>! <strong>{param.asdasd}</strong></p>
    </div>
  );
}

export default Featured;