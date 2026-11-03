// Menù del Falco — flowers and backgrounds.
// 1. Adds an SVG <symbol id="bouquet"> to the page; use it with <svg viewBox="0 0 320 280"><use href="#bouquet"/></svg>
// 2. Defines window.FalcoThemes: the 4 menu backgrounds Carla can choose from.
//      FalcoThemes.list            → [{ n, name, paper }]
//      FalcoThemes.paint(el, n, o) → draws theme n's floral edges inside el (el must be position:relative/absolute)
//                                    o.scale (default 1), o.bouquets (true = draw mini corner bouquets for theme 1)
//                                    returns { top, right, bottom, left } edge thickness in px
(function () {
  const LEAF = 'M0 0C7-9 22-11 36 0C22 11 7 9 0 0Z';
  const GREENS = ['#4F5E22', '#6E7D2B', '#9AAE4A', '#BFCB6E', '#8C6D24'];

  /* ───────────── drawing pieces ───────────── */

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

  function leaf(x, y, ang, sc, col) {
    return `<path d="${LEAF}" fill="${col}" transform="translate(${x} ${y}) rotate(${ang}) scale(${sc})"/>`;
  }

  function rose(x, y, r) {
    return `<g transform="translate(${x} ${y})">
      <circle r="${r}" fill="#D2502E"/>
      <path d="M${-r * 0.95} ${r * 0.15}Q${-r * 0.2} ${r * 1.05} ${r * 0.9} ${r * 0.25}" fill="#B83F22"/>
      <circle cx="${-r * 0.08}" cy="${-r * 0.1}" r="${r * 0.7}" fill="#E06A4B"/>
      <circle cx="${-r * 0.05}" cy="${-r * 0.12}" r="${r * 0.44}" fill="#C8452A"/>
      <path d="M${-r * 0.22} ${-r * 0.12}a${r * 0.17} ${r * 0.17} 0 1 1 ${r * 0.3} ${r * 0.12}a${r * 0.28} ${r * 0.28} 0 1 1 ${-r * 0.5} ${-r * 0.2}"
            fill="none" stroke="#7C2414" stroke-width="${Math.max(1.2, r * 0.06)}" stroke-linecap="round"/>
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

  function daisy(x, y, r) {
    let s = `<g transform="translate(${x} ${y})">`;
    for (let i = 0; i < 9; i++) {
      s += `<ellipse cx="${r * 0.55}" rx="${r * 0.48}" ry="${r * 0.2}" fill="#FFFDF4" stroke="#D9C9A0" stroke-width=".8" transform="rotate(${i * 40})"/>`;
    }
    return s + `<circle r="${r * 0.28}" fill="#EDB437" stroke="#CF9420" stroke-width=".8"/></g>`;
  }

  function poppy(x, y, r) {
    return `<g transform="translate(${x} ${y})">
      <circle cx="${-r * 0.35}" cy="${-r * 0.2}" r="${r * 0.62}" fill="#D2402A"/>
      <circle cx="${r * 0.35}" cy="${-r * 0.2}" r="${r * 0.62}" fill="#C8352A"/>
      <circle cx="0" cy="${r * 0.3}" r="${r * 0.62}" fill="#E0573C"/>
      <circle r="${r * 0.24}" fill="#2B1A12"/>
    </g>`;
  }

  /* ───────────── the bouquet symbol (theme 1 and headers) ───────────── */

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

  /* ───────────── repeating edge tiles ───────────── */

  function tile(w, h, body) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`;
    return { w, h, url: `url("data:image/svg+xml,${encodeURIComponent(svg)}")` };
  }

  // Theme 2: a climbing rose vine (runs down the sides)
  const VINE = tile(60, 150,
    `<path d="M30 0C12 38 48 112 30 150" stroke="#6E7D2B" stroke-width="2.4" fill="none"/>` +
    leaf(21, 30, 160, .55, '#9AAE4A') + leaf(38, 52, 20, .55, '#4F5E22') +
    leaf(40, 104, -15, .5, '#9AAE4A') + leaf(22, 126, 200, .5, '#6E7D2B') +
    leaf(24, 92, 150, .42, '#4F5E22') +
    rose(30, 75, 10) + star(14, 46, 5) + star(46, 130, 4.5)
  );

  // Theme 3: meadow of daisies and poppies (bottom) + scattered blossoms (top)
  let grass = '';
  for (let i = 0; i < 16; i++) {
    const x = i * 10 + 3, h = 18 + ((i * 37) % 26), lean = i % 2 ? 6 : -6;
    grass += `<path d="M${x} 96q3 ${-h / 2} ${lean} ${-h}" stroke="${GREENS[i % 4]}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  }
  const MEADOW = tile(160, 96,
    `<path d="M40 96Q36 70 40 46" stroke="#6E7D2B" stroke-width="1.8" fill="none"/>` +
    `<path d="M100 96Q104 64 100 36" stroke="#4F5E22" stroke-width="1.8" fill="none"/>` +
    `<path d="M138 96Q134 76 138 56" stroke="#6E7D2B" stroke-width="1.6" fill="none"/>` +
    `<path d="M70 96Q73 80 70 62" stroke="#9AAE4A" stroke-width="1.6" fill="none"/>` +
    leaf(40, 72, -35, .38, '#9AAE4A') + leaf(100, 66, 210, .4, '#6E7D2B') +
    grass +
    daisy(40, 44, 10) + poppy(100, 34, 11) + daisy(138, 54, 7.5) + star(70, 60, 5.5)
  );
  const BLOSSOM = tile(150, 44,
    leaf(28, 16, 20, .35, '#9AAE4A') + leaf(96, 12, -25, .35, '#6E7D2B') + leaf(130, 30, 160, .3, '#9AAE4A') +
    star(18, 14, 5.5) + rose(64, 18, 6.5) + daisy(112, 22, 7) + star(140, 10, 3.5) + star(44, 32, 3)
  );

  // Theme 4: a little daisy chain on all four edges
  const DAISIES = tile(44, 44,
    leaf(22, 22, 40, .45, '#6E7D2B') + leaf(22, 22, 220, .45, '#9AAE4A') + daisy(22, 22, 9.5)
  );

  /* ───────────── themes ───────────── */

  const THEMES = {
    1: { name: 'Bouquet',    paper: '#FFE09B', edges: {} },
    2: { name: 'Ghirlanda',  paper: '#FFE6A8', edges: { left: VINE, right: VINE } },
    3: { name: 'Prato',      paper: '#FFE09B', edges: { top: BLOSSOM, bottom: MEADOW } },
    4: { name: 'Margherite', paper: '#FFEBBA', edges: { top: DAISIES, right: DAISIES, bottom: DAISIES, left: DAISIES } }
  };

  function paint(el, n, opts) {
    opts = opts || {};
    const s = opts.scale || 1;
    const t = THEMES[n] || THEMES[1];
    el.querySelectorAll('.fl-edge').forEach(x => x.remove());
    const out = { top: 0, right: 0, bottom: 0, left: 0 };

    Object.keys(t.edges).forEach(side => {
      const tl = t.edges[side];
      const d = document.createElement('div');
      d.className = 'fl-edge';
      d.setAttribute('aria-hidden', 'true');
      const st = d.style;
      st.position = 'absolute';
      st.pointerEvents = 'none';
      st.backgroundImage = tl.url;
      st.backgroundSize = `${tl.w * s}px ${tl.h * s}px`;
      if (side === 'top' || side === 'bottom') {
        st.left = '0'; st.right = '0'; st.height = (tl.h * s) + 'px';
        st[side] = '0';
        st.backgroundRepeat = 'repeat-x';
        st.backgroundPosition = side === 'bottom' ? 'left bottom' : 'left top';
        out[side] = tl.h * s;
      } else {
        st.top = '0'; st.bottom = '0'; st.width = (tl.w * s) + 'px';
        st[side] = '0';
        st.backgroundRepeat = 'repeat-y';
        if (side === 'right') { st.transform = 'scaleX(-1)'; st.backgroundPosition = `left ${tl.h * s * 0.5}px`; }
        out[side] = tl.w * s;
      }
      el.appendChild(d);
    });

    // Mini previews of theme 1 show two little corner bouquets
    if (n == 1 && opts.bouquets) {
      const bq = (style) => {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 320 280');
        svg.setAttribute('class', 'fl-edge');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('style', 'position:absolute;pointer-events:none;' + style);
        svg.innerHTML = '<use href="#bouquet"/>';
        el.appendChild(svg);
      };
      bq('width:46%;left:-8%;top:-4%');
      bq('width:40%;right:-6%;bottom:-3%;transform:scaleX(-1)');
    }
    return out;
  }

  window.FalcoThemes = {
    list: Object.keys(THEMES).map(k => ({ n: +k, name: THEMES[k].name, paper: THEMES[k].paper })),
    get: n => THEMES[n] || THEMES[1],
    paint: paint
  };
})();
