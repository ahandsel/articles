javascript: (function () {
  const forceEnableCopyPaste = (e) => {
    e.stopImmediatePropagation();
    return true;
  };

  ['paste', 'copy'].forEach(event => {
    document.addEventListener(event, forceEnableCopyPaste, true);
  });
})();