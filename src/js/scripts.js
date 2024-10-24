document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('background-container');
  
  // Ajustar la opacidad de la imagen de fondo
  const backgroundImage = document.getElementById('background-image');
  if (backgroundImage) {
      const opacityValue = backgroundImage.getAttribute('data-opacity') || 0.8; // Toma el valor de data-opacity o 0.8 por defecto
      backgroundImage.style.setProperty('--bg-opacity', opacityValue);
  }
  
  // Añadir la clase bg
  const bg = document.createElement('div');
  bg.className = 'bg';
  container.appendChild(bg);

  // Añadir 15 elementos firefly
  for (let i = 0; i < 15; i++) {
      const firefly = document.createElement('div');
      firefly.className = 'firefly';
      container.appendChild(firefly);
  }

  // Añadir 110 elementos circle-container
  for (let i = 0; i < 110; i++) {
      const circleContainer = document.createElement('div');
      circleContainer.className = 'circle-container';
      
      const circle = document.createElement('div');
      circle.className = 'circle';
      
      circleContainer.appendChild(circle);
      container.appendChild(circleContainer);
  }
});


document.querySelectorAll('.subtitle_post .image-container').forEach(container => {
    const image = container.querySelector('img');
    const zoom = container.querySelector('.zoom');
  
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      zoom.style.backgroundImage = `url(${image.src})`;
      zoom.style.backgroundSize = `${image.width * 2}px ${image.height * 2}px`;
      zoom.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
      zoom.style.display = 'block';
      zoom.style.left = `${x - zoom.offsetWidth / 2}px`;
      zoom.style.top = `${y - zoom.offsetHeight / 2}px`;
    });
  
    container.addEventListener('mouseleave', () => {
      zoom.style.display = 'none';
    });
  });
  

function redirectToRandomUrl() {
    const urls = [
        "https://sliding.toys/mystic-square/8-puzzle/daily/",
        "https://alwaysjudgeabookbyitscover.com/",
        "https://puginarug.com/",
        "https://optical.toys/",
        "https://memory.toys/classic/easy/",
        "https://checkbox.toys/scale/",
        "https://longdogechallenge.com/",
        "https://onesquareminesweeper.com/",
        "https://thatsthefinger.com/",
        "https://floatingqrcode.com/",
        "https://clicking.toys/flip-grid/neat-nine/3-holes/",
        "https://binarypiano.com/",
        "https://jacksonpollock.org/",
        "https://smashthewalls.com/",
        "https://maze.toys/mazes/mini/daily/",
        "http://www.staggeringbeauty.com/",
        "https://burymewithmymoney.com/",
        "https://sliding.toys/klotski/easy-street/",
        "https://drawing.garden/",
        "https://paint.toys/calligram/",
        "https://maninthedark.com/",
        "https://www.koalastothemax.com/",
        "https://hackertyper.com/"
    ];
    const randomIndex = Math.floor(Math.random() * urls.length);
    window.open(urls[randomIndex], '_blank');
}

function showSnackBar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }



function copyToClipboard(text) {
    const el = document.createElement('textarea');  // Crear un elemento textarea
    el.value = text;  // Asignar el texto a copiar
    el.setAttribute('readonly', '');  // Hacer el textarea de solo lectura para que no se pueda editar accidentalmente
    el.style.position = 'absolute'; 
    el.style.left = '-9999px';  // Mover el textarea fuera del área visible de la pantalla
    document.body.appendChild(el);  // Agregar el textarea al DOM
  
    // Seleccionar el texto dentro del textarea
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand('copy');  // Copiar el texto seleccionado
  
    // Limpiar
    document.body.removeChild(el);  // Eliminar el textarea del DOM
    if (selected) {
      document.getSelection().removeAllRanges();  // Limpiar la selección de texto
      document.getSelection().addRange(selected);  // Restaurar la selección original si había alguna
    }

    showSnackBar()
}
  


