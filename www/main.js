chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    bounds: {
      height: 480,
      width: 320
    },
    minHeight: 480,
    minWidth: 320,
    maxHeight: 480,
    maxWidth: 320,
  });
});
