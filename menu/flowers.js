// Hand-drawn bouquet in the style of the Canva menu: red roses, a big yellow flower, olive sprigs.
// Adds an SVG <symbol id="bouquet"> to the page; use it with <svg viewBox="0 0 320 280"><use href="#bouquet"/></svg>
(function () {
  const LEAF = 'M0 0C7-9 22-11 36 0C22 11 7 9 0 0Z';
  const GREENS = ['#4F5E22', '#6E7D2B', '#9AAE4A', '#BFCB6E', '#8C6D24'];

  function sprig(cx, cy, ang, len, col, n) {
    let s = `<g transform="translate(${cx} ${cy}) rotate(${ang})">`;
    s += `<path d="M0 0Q${len * 0.5} ${len * 0.1} ${len} 0" stroke="${col}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
    for (let i = 1; i <= n; i++) {
      const x = (len * i) / (n + 1);
      const side = i % 2 ? 1 : -1;
      const sc = 0.5 + 0.35 * (1 - i / (n + 1));
      s += `<path d="${LEAF}" fill="${col}" transform="translate(${x.toFixed(1)} 0) rotate(${side * 42}) scale(${sc.toFixed(2)})"/>`;
    }
    s += `<path d="${LEAF}" fill="${col}" transform="translate(${len - 4} 0) scale(.62)"/>`;
    return s + '</g>';
  }

  function rose(x, y, r) {
    return `<g transform="translate(${x} ${y})">
      <circle r="${r}" fill="#D2502E"/>
      <path d="M${-r * 0.95} ${r * 0.15}Q${-r * 0.2} ${r * 1.05} ${r * 0.9} ${r * 0.25}" fill="#B83F22"/>
      <circle cx="${-r * 0.08}" cy="${-r * 0.1}" r="${r * 0.7}" fill="#E06A4B"/>
      <circle cx="${-r * 0.05}" cy="${-r * 0.12}" r="${r * 0.44}" fill="#C8452A"/>
      <path d="M${-r * 0.22} ${-r * 0.12}a${r * 0.17} ${r * 0.17} 0 1 1 ${r * 0.3} ${r * 0.12}a${r * 0.28} ${r * 0.28} 0 1 1 ${-r * 0.5} ${-r * 0.2}"
            fill="none" stroke="#7C2414" stroke-width="${Math.max(1.4, r * 0.06)}" stroke-linecap="round"/>
      <path d="M${-r * 0.6} ${-r * 0.45}Q${-r * 0.1} ${-r * 0.85} ${r * 0.45} ${-r * 0.5}" fill="none" stroke="#F3A68D" stroke-width="${r * 0.07}" stroke-linecap="round"/>
    </g>`;
  }

  function bigFlower(x, y, r) {
    let s = `<g transform="translate(${x} ${y})">`;
    for (let i = 0; i < 10; i++) {
      s += `<ellipse cx="${r * 0.56}" rx="${r * 0.5}" ry="${r * 0.27}" fill="#EDB437" stroke="#CF9420" stroke-width="1.5" transform="rotate(${i * 36})"/>`;
    }
    for (let i = 0; i < 10; i++) {
      s += `<ellipse cx="${r * 0.38}" rx="${r * 0.34}" ry="${r * 0.18}" fill="#F7D464" transform="rotate(${i * 36 + 18})"/>`;
    }
    s += `<circle r="${r * 0.3}" fill="#5A3B17"/>`;
    for (let i = 0; i < 12; i++) {
      const a = (i * 30 * Math.PI) / 180;
      s += `<circle cx="${(Math.cos(a) * r * 0.18).toFixed(1)}" cy="${(Math.sin(a) * r * 0.18).toFixed(1)}" r="${r * 0.035}" fill="#F3E2A6"/>`;
    }
    s += `<circle r="${r * 0.06}" fill="#F3E2A6"/>`;
    return s + '</g>';
  }

  function star(x, y, r) {
    let s = `<g transform="translate(${x} ${y})">`;
    for (let i = 0; i < 5; i++) {
      s += `<ellipse cx="${r * 0.55}" rx="${r * 0.5}" ry="${r * 0.28}" fill="#F0BF45" transform="rotate(${i * 72 - 90})"/>`;
    }
    return s + `<circle r="${r * 0.22}" fill="#B9801C"/></g>`;
  }

  // Centre of the bouquet
  const cx = 160, cy = 140;
  let art = '';
  const sprigs = [
    [200, 118, 0], [222, 104, 1], [245, 112, 2], [268, 100, 3], [292, 116, 4], [315, 104, 1],
    [338, 110, 0], [20, 112, 2], [42, 100, 3], [65, 110, 1], [88, 96, 4], [112, 104, 0],
    [135, 116, 2], [158, 100, 3], [180, 110, 1]
  ];
  sprigs.forEach(([a, l, c], i) => { art += sprig(cx, cy, a, l, GREENS[c], 5 + (i % 2)); });

  art += rose(88, 92, 34);
  art += rose(236, 92, 26);
  art += rose(222, 196, 22);
  art += rose(96, 200, 16);
  art += bigFlower(162, 138, 62);
  art += star(122, 70, 11);
  art += star(258, 150, 9);
  art += star(70, 150, 8);
  art += star(190, 60, 7);

  const holder = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  holder.setAttribute('aria-hidden', 'true');
  holder.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden');
  holder.innerHTML = `<symbol id="bouquet" viewBox="0 0 320 280">${art}</symbol>`;
  (document.body || document.documentElement).prepend(holder);
})();
