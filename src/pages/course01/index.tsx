import React, { useRef, useEffect } from 'react';
import { Card } from 'antd';
import { InitDemo } from './gl';

const index: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = ref.current;

    if (!canvasElement) return;

    InitDemo(canvasElement);
  }, [ref]);

  return (
    <Card>
      <canvas ref={ref} width="800" height="600">
        你的浏览器不支持canvas
      </canvas>
    </Card>
  );
};

export default index;
