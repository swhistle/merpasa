function go(path) {
  window.open(path, '_self');
}

if (/Android /.test(navigator.appVersion)) {
  window.addEventListener('resize', function() {
    var activeElement = document.activeElement.tagName;

    if (activeElement === 'INPUT' || activeElement === 'TEXTAREA') {
      window.setTimeout(function() {
        document.activeElement.scrollIntoViewIfNeeded();
      }, 0);
    }
  })
}
