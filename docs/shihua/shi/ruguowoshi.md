<html>
<body>
<script>
  const fps = 30;
const mspf = Math.floor(1000 / fps) ; 
let width = window.innerWidth || document.documentElement.clientWidth;
let height = window.innerHeight || document.documentElement.clientHeight;
let canvas;
window.addEventListener('resize', () => {
  width = window.innerWidth || document.documentElement.clientWidth;
  height = window.innerHeight || document.documentElement.clientHeight;
  if (canvas) {
    canvas.width = width;
    canvas.height = height;
  }
});
let particles = [];
let wind = [0, 0];
let cursor = [0, 0];
function velocity(r) {
  return 70 / r + 30;
}
function sine_component(h, a) {
  return [2 * Math.PI / h, Math.random() * a, Math.random() * 2 * Math.PI]; // [frequency, amplitude, phase]
}
function calc_sine(components, x) {
  let sum = 0;
  for (let i = 0; i < components.length; i++) {
    const [f, a, p] = components[i];
    sum += Math.sin(x * f + p) * a;
  }
  return sum;
}
function gen_particle() {
  let r = Math.random() * 4 + 1;
  return {
    radius: r,
    x: Math.random() * width,
    y: -r,
    opacity: Math.random(),
    sine_components: [sine_component(height, 3), sine_component(height / 2, 2), sine_component(height / 5, 1), sine_component(height / 10, 0.5)],
  };
}
function update_pos(dt) {
  const n = particles.length;
  for (let i = 0; i < n; i++) {
    const v = velocity(particles[i].radius);
    particles[i].x += calc_sine(particles[i].sine_components, particles[i].y) * v / 5 * dt;
    particles[i].y += v * dt;
    // const dist = Math.hypot(particles[i].x - cursor[0], particles[i].y - cursor[1]) + 1;
    // particles[i].x += wind[0] * dt / dist
    // particles[i].y += wind[1] * dt / dist;
    if (particles[i].y - particles[i].radius > height) {
      particles[i] = gen_particle();  
    }
  }
}
let context_cache;
function get_context() {
  if (context_cache)
    return context_cache;
  canvas = document.createElement('canvas');
  canvas.id = 'snow-canvas';
  canvas.width = width;
  canvas.height = height;
  canvas.style = 'position: fixed; top: 0; left: 0; overflow: hidden; pointer-events: none; z-index: 256;';
  if ((document.documentElement.dataset.darkreaderMode || "").startsWith('filter'))
    canvas.style.filter = 'invert(1)';
  document.body.appendChild(canvas);
  context_cache = canvas.getContext('2d');
  return context_cache;
}
function draw() {
  const ctx = get_context();
  ctx.clearRect(0, 0, width, height);
  const n = particles.length;
  for (let i = 0; i < n; i++) {
    const p = particles[i];
    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
    ctx.shadowColor = '#80EDF7';
    ctx.shadowBlur = 7;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2*Math.PI);
    ctx.fill();
  }
}
let focused = true;
let disabled = false;
let lastTime = performance.now();
const requestFrame = () => setTimeout(loop, mspf);
function loop() {
  const dt = (performance.now() - lastTime) / 1000;
  if (particles.length < 120 && Math.random() < 0.1) {
    particles.push(gen_particle());
  }
  update_pos(dt);
  draw();
  lastTime = performance.now();
  if (focused && !disabled)
    requestFrame();
}
window.addEventListener('focus', () => {
  console.log('snow start');
  focused = true;
  lastTime = performance.now();
  requestFrame();
});
window.addEventListener('blur', () => {
  console.log('snow stop');
  focused = false;
});
window.addEventListener('keydown', e => {
  if (e.ctrlKey && e.key == 's') {
    e.preventDefault();
    disabled = !disabled;
    if (disabled) {
      canvas.style.display = 'none';
    } else {
      canvas.style.display = 'block';
      lastTime = performance.now();
      requestFrame();
    }
  }
});
requestFrame();
</script>
</body>
</html>

<div class="grid cards" style = "margin:10px calc(30%) 10px calc(5%)" markdown>

-   :material-book-open-variant:{ .lg .middle } __2020-02-18 C__

    ---

    如果我是作家<br>
    诗歌会是我的专长<br>
    每一句，都是为你<br>
    深情的演唱<br>
    <br>
    如果我是画家<br>
    素描会是我的专长<br>
    你的容颜，不需要<br>
    任何色彩点装<br>
    <br>
    如果我是音乐家<br>
    谱曲会是我的专长<br>
    每一个音符，因你<br>
    而跳动疯狂<br>
    <br>
    我虽不是音乐家<br>
    愿陪你谱一曲<br>
    安逸舒适的生活乐章<br>
    <br>
    我虽不是画家<br>
    愿陪你走一条<br>
    简单平淡的人生画廊<br>
    <br>
    我虽不是作家<br>
    愿陪你写一部<br>
    精彩多姿的记忆篇章
</div>

