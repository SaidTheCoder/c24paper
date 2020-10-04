class Paper {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':0.3,
          'density':1.2,
      }
      this.body = Bodies.circle(x, y,r, options);
      this.r=r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      strokeWeight(4)
      stroke("yellow")
      fill("red");
      ellipse(0, 0, this.r);
      pop();
    }
  };
  