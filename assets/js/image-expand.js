(function () {
  function wrap(img) {
    if (img.closest('a')) return null;
    var parent = img.parentElement;
    if (!parent) return null;
    if (parent.classList.contains('img-expandable')) return parent;

    var target;
    if (parent.tagName === 'FIGURE') {
      target = parent;
    } else {
      target = document.createElement('span');
      parent.insertBefore(target, img);
      target.appendChild(img);
    }
    target.classList.add('img-expandable');
    return target;
  }

  function checkSize(img, target) {
    var rendered = img.getBoundingClientRect().height;
    var maxH = window.innerHeight * 0.36;
    if (rendered && rendered < maxH - 1) {
      target.classList.add('no-expand-needed');
    } else {
      target.classList.remove('no-expand-needed');
    }
  }

  function init() {
    var imgs = document.querySelectorAll('.article-content img');
    if (!imgs.length) return;

    imgs.forEach(function (img) {
      var target = wrap(img);
      if (!target) return;

      target.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') return;
        if (target.classList.contains('no-expand-needed')) return;
        target.classList.toggle('expanded');
      });

      var recheck = function () { checkSize(img, target); };
      if (img.complete && img.naturalHeight) {
        recheck();
      } else {
        img.addEventListener('load', recheck);
      }
      window.addEventListener('resize', recheck);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
