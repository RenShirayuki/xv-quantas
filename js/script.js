const pageFlip = new St.PageFlip(
  document.getElementById("flipbook"),
  {
    width: 400,   // lebar halaman
    height: 600,  // tinggi halaman
    size: "stretch",
    maxShadowOpacity: 0.5,
    showCover: true,
    mobileScrollSupport: false
  }
);

// Tambahkan halaman awal
pageFlip.loadFromHTML([
  `<div class="page"><div class="page-content"><h2>Cover</h2><p>Novel by Master</p></div></div>`,
  `<div class="page"><div class="page-content"><h2>Page 1</h2><p>Halo Master, ini halaman pertama flipbook.</p></div></div>`,
  `<div class="page"><div class="page-content"><h2>Page 2</h2><p>Kamu bisa isi halaman ini dengan tulisanmu.</p></div></div>`,
  `<div class="page"><div class="page-content"><h2>Page 3</h2><p>Ini halaman terakhir contoh.</p></div></div>`
]);
