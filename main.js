/* 下の宣言は下記のように書くこともできる。
  const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')]; */
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

const opacity = 0.4; // 透明度

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img =>
  img.addEventListener('click', imgClick));

function imgClick(e) {
  // opacityをリセット
  imgs.forEach(img => (img.style.opacity = 1));

  // imgをクリックするとcurrent idのsrcを変更し画像が変わる
  current.src = e.target.src;

  // cssのfade-inクラスを追加
  current.classList.add('fade-in');

  // fade-inクラスを0.4秒後削除
  setTimeout(() => current.classList.remove('fade-in'),
  400);

  // クリックした時にサムネイルを透明にする
  e.target.style.opacity = opacity;
}
