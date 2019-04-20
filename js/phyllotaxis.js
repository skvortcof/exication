/* phyllotaxis
**
** "In botany, phyllotaxis or phyllotaxy is the arrangement of
** leaves on a plant stem (from Ancient Greek phýllon "leaf" and
** táxis "arrangement").[1] Phyllotactic spirals form a distinctive
** class of patterns in nature." (from Wikipedia)
**
** Fork in threejs from Coding Challenge #30 by Daniel Shiffman
** https://youtu.be/KWoJgHFYWxY
**
*/

// set up the scene
var scene = new THREE.Scene();

// set up the threejscamera to see the actual scene
var threejscamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
threejscamera.translateZ(1000);
scene.add(threejscamera);

// set up the renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0x000000, 0);
document.body.appendChild(renderer.domElement);

// make the canvas adaptable to the window screen
window.addEventListener('resize', function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  threejscamera.aspect = width / height;
  threejscamera.updateProjectionMatrix();
});

// create the particle variable
var particlesCount = 512;
var particles = new THREE.Geometry();
// var particlesMaterial = new THREE.ParticleBasicMaterial({ color: 0xffffff, size: 2 });
var particlesMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 1
});

var n = 0;
var c = 10 + (Math.random()*40);
var rot = Math.random()*360;

// add the lines geometry to the scene
var lines = new THREE.Geometry();

for (var i = 0; i < particlesCount; i++) {

  var particle = particles.vertices[i];

  var a = THREE.Math.radToDeg(n * 137.5);
  var r = c * Math.sqrt(n);

  var px = Math.sin(a)*r;
  var py = Math.cos(a)*r;
  var pz = 0;

  var particle = new THREE.Vector3(px, py, pz);

  n++;

  // add the particle to the array
  particles.vertices.push(particle);
}


// add the lines
for (var i = 0; i < particlesCount - 1; i++) {
  var a = particles.vertices[i];
  for (var j = i + 1; j < particlesCount; j++) {
    var b = particles.vertices[j];
    if (a.distanceTo(b) < c*10) {
      lines.vertices.push(a);
      lines.vertices.push(b);
    }
  }
}
var line = new THREE.Line(lines, new THREE.LineBasicMaterial({
  color: 0xffffff,
  opacity: 0.01,
  transparent: true
}));
scene.add(line);

// Create a new particle system with the particles and the material
var ParticleSystem = new THREE.Points(particles, particlesMaterial);

// Add the particle system to the scene
scene.add(ParticleSystem);

// update function
var update = function() {

  n = 0;

  for (var i = 0; i < particlesCount; i++) {

    var particle = particles.vertices[i];

    var a = THREE.Math.radToDeg(n * (137.5 + rot));
    var r = c * Math.sqrt(n);

    n++;

    particle.x = Math.sin(a)*r;
    particle.y = Math.cos(a)*r;
    particle.z = 0;
  }

  rot += 0.000001;

  // flag to the particle system and the lines geometry
  // that we've changed its vertices.
  particles.verticesNeedUpdate = true;
  lines.verticesNeedUpdate = true;
  lines.__dirtyvertices = true;
};

// render function
var render = function() {
  // let's render the actual scene, first parameter is the scene, second the threejscamera
  renderer.render(scene, threejscamera);
};

// Game Loop function (update, render, repeat)
var draw = function() {
  requestAnimationFrame(draw);

  // update and render
  update();
  render();
};

draw();
