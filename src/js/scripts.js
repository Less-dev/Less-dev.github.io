document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('background-container');
    
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

