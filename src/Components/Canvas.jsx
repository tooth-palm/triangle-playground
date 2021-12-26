import p5 from "p5";
import { useEffect } from "react";

const Canvas = (props) => {
  useEffect(() => {
    const sketch = (p) => {
      const canvasWidth = 300;

      p.setup = () => {
        p.createCanvas(canvasWidth, canvasWidth);
        p.background(0);
        p.strokeWeight(props.values.strokeWeight);
        p.stroke(255, props.values.strokeAlpha);
        p.fill(255, props.values.fillAlpha);
        p.noLoop();
      };

      p.draw = () => {
        const diameter = canvasWidth;
        let points = [];
        for (let i = 0; i < 3; i++) {
          const pt = getInitialPoint();
          points.push(pt);
        }
        for (let i = 0; i < diameter; i++) {
          points = points.map((pt) => {
            pt.x = canvasWidth / 2 + p.sin(p.radians(pt.degree)) * pt.diameter;
            pt.y = canvasWidth / 2 + p.cos(p.radians(pt.degree)) * pt.diameter;
            pt.diameter -= pt.shrinkSpeed;
            if (pt.diameter < 0) {
              pt.diameter = 0;
            }
            pt.degree += pt.rotateSpeed;
            if (pt.degree >= 360) {
              pt.degree -= 360;
            }
            return pt;
          });
          p.triangle(
            points[0].x,
            points[0].y,
            points[1].x,
            points[1].y,
            points[2].x,
            points[2].y
          );
        }
      };

      const getInitialPoint = () => {
        const degree = p.random(360);
        const rotateSpeed = p.random(props.values.density1);
        const shrinkSpeed = p.random(props.values.density2);
        const diameter = canvasWidth * (2 / 5) + p.random(canvasWidth / 10);
        const pt = {
          degree: degree,
          rotateSpeed: rotateSpeed,
          shrinkSpeed: shrinkSpeed,
          diameter: diameter,
          x: 0,
          y: 0,
        };
        return pt;
      };
    };
    new p5(sketch, document.getElementById("canvasArea"));
  }, [props.values]);
  return <></>;
};

export default Canvas;
