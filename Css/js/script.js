const pageFlip = new St.PageFlip(
  document.getElementById("flipbook"),
  {
    width: 400, // lebar halaman
    height: 600, // tinggi halaman
    size: "stretch",
    maxShadowOpacity: 0.5,
    showCover: true,
    mobileScrollSupport: false
  }
);

// Tambahin halaman
pageFlip.loadFromHTML([
  `<div class="page"><div class="page-content"><h2>Page 1</h2><p>Hello Master, ini halaman pertama.</p></div></div>`,
  `<div class="page"><div class="page-content"><h2>Page 2</h2><p>Flip me!</p></div></div>`,
  `<div class="page"><div class="page-content"><h2>Page 3</h2><p>Ini halaman terakhir.</p></div></div>`
]);
