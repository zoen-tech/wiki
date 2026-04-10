// ヘッダータイトル全体をクリック可能にし、TOPへ遷移させる
(function () {
  function bind() {
    var logo = document.querySelector('.md-header__button.md-logo');
    var title = document.querySelector('.md-header__title');
    if (!logo || !title || title.dataset.linked === '1') return;
    var href = logo.getAttribute('href');
    if (!href) return;
    title.dataset.linked = '1';
    title.style.cursor = 'pointer';
    title.setAttribute('role', 'link');
    title.setAttribute('tabindex', '0');
    title.addEventListener('click', function () {
      window.location.href = href;
    });
    title.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.location.href = href;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
