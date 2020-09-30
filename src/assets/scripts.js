lottie.loadAnimation({
    container: document.getElementById('lottie'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json' // the path to the animation json
  });

  var anim = document.getElementById('lottie');
  anim.innerHTML = 'salut';