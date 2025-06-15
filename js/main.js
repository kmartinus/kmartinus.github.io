
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy Birthday,Jessie').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

</head>
<h1> AUDIO/AUTOPLAY</h1>
<body style = "background: url(black.jpg): background
-size: fixed:")
<audio autoplay:
<source src = "Neu Roses (Transgressor s Song).mp3" type="audio/mp3)
</audio>
</body>
</html>
