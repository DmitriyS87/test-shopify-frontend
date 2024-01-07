import React, { useEffect, useRef } from 'react';
import { sanitizeHtml } from '../../lib';

const CanvasImg = ({src, ...other}) => {
    const canvasRef = useRef(null);
    const sanitizedUrl = sanitizeHtml(src);
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      const img = new Image();
      img.src = sanitizedUrl;
  
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0);
      };
    }, [sanitizedUrl]);
  
    return <canvas  {...other} ref={canvasRef} />;
};

export default CanvasImg;