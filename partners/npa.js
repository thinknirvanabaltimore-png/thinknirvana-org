/* ============================================================
   Nirvana Partner Alliance — shared header
   Renders ONE consistent nav into <header id="npa-head"> on every
   Alliance page (current + future). Edit nav links here once.
   All links are root-absolute, so this file is identical at any depth.
   ============================================================ */
(function () {
  var APPLY = 'mailto:partners@thinknirvana.org'
    + '?subject=Nirvana%20Partner%20Alliance%20%E2%80%94%20Application'
    + '&body=Name%3A%0AFirm%2FCompany%3A%0AMy%20role%20(CPA%20%2F%20CFO%20%2F%20CHRO%20%2F%20Attorney%20%2F%20P%26C%20Agent%20%2F%20Banker)%3A%0AApprox.%20%23%20of%20small-business%20clients%20I%20serve%3A%0ABest%20email%20%26%20phone%3A%0AAnything%20you%27d%20like%20us%20to%20know%3A%0A';

  function build() {
    var head = document.getElementById('npa-head');
    if (!head) return;
    head.className = 'npa-head';
    head.innerHTML =
      '<div class="wrap npa-head-in">' +
        '<a class="npa-brand" href="/partners/">' +
          '<span class="npa-mark"><img src="/partners/assets/tn-mark.png" alt="ThinkNirvana" width="36" height="36"/></span>' +
          '<span><b>The Nirvana Partner Alliance</b><span>ThinkNirvana.org</span></span>' +
        '</a>' +
        '<button class="npa-burger" aria-label="Menu" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
        '<nav class="npa-nav">' +
          '<a href="https://thinknirvana.org">\u2190 ThinkNirvana.org</a>' +
          '<a href="/partners/">Alliance</a>' +
          '<a href="/partners/insights/">The Playbook</a>' +
          '<a href="https://aipep401k.com">AIPEP401K</a>' +
          '<a class="npa-cta" href="' + APPLY + '">Apply</a>' +
        '</nav>' +
      '</div>';

    var burger = head.querySelector('.npa-burger');
    var nav = head.querySelector('.npa-nav');
    function close() { nav.classList.remove('open'); burger.classList.remove('x'); burger.setAttribute('aria-expanded', 'false'); }
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.classList.toggle('x', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') close(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
