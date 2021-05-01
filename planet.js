class Planet {
  constructor(radius, distance, angle, orbitspeed, texture) {
    this.r = radius;
    this.d = distance;
    this.v = p5.Vector.random3D();
    this.v.mult(this.d);
    this.a = angle;
    this.o = orbitspeed;
    this.planets = [];
    this.texture = texture;
  }

  orbit() {
    this.a += this.o;
    for (let i in this.planets) {
      this.planets[i].orbit();
    }
  }

  spawnMoons(total, level) {
    for (let i = 0; i < total; i++) {
      let r = this.r / (level * 2);
      let d = random(this.r + r, (this.r + r) * 2);
      let a = random(TWO_PI);
      let o = random(-0.1, 0.1);
      let i = floor(random(textures.length))
      this.planets[i] = new Planet(r, d, a, o, textures[i]);
      if (level < 2) {
        let num = floor(random(3));
        this.planets[i].spawnMoons(num, level + 1);
      }
    }
  }

  show() {
    push();
    noStroke();
    let v2 = createVector(1, 0, 1);
    let p = this.v.cross(v2);
    if (p.x != 0 || p.y != 0 || p.z != 0) {
      rotate(this.a, p);
    }
    translate(this.v.x, this.v.y, this.v.z);
    texture(this.texture);
    sphere(this.r);
    for (let i in this.planets) {
      this.planets[i].show();
    }
    pop();
  }
}