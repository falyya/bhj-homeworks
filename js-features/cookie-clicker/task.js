let clickCount = 0;
let lastClick = new Date();

document.getElementById('cookie').addEventListener('click', () => {
    clickCount++;
    document.getElementById('clicker__counter').innerText = `${clickCount}`;

    const currentTime = new Date();
    const clickSpeed = 1 / ((currentTime - lastClick ) / 1000);
    document.getElementById('clicker__speed').innerText = `${clickSpeed.toFixed(2)}`;

    lastClick = currentTime;

    if (clickCount % 2 ===0) {
        document.getElementById('cookie').style.width = '200px';
    } else {
        document.getElementById('cookie').style.width = '180px';
    }
});