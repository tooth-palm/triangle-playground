const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(1000, 1000);
    p.background(0);
    p.stroke(255, 100);
    p.fill(255, 5);
    p.noLoop();
  };
  p.draw = () => {
    const diameter = 500;
    let points = [];
    for (let i = 0; i < 3; i++) {
      const pt = getInitialPoint();
      points.push(pt);
    }
    for (let i = 0; i < diameter; i++) {
      points = points.map((pt) => {
        pt.x = 500 + p.sin(p.radians(pt.degree)) * pt.diameter;
        pt.y = 500 + p.cos(p.radians(pt.degree)) * pt.diameter;
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
    const rotateSpeed = p.random(10);
    const shrinkSpeed = p.random(3);
    const diameter = 400 + p.random(100);
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

export default sketch;
