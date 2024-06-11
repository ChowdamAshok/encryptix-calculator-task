function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.remove('loading');
        document.querySelector('.loading-overlay').style.display = 'none';
    }, 7000);
});

gsap.from('.heading',{opacity: 0, duration: 1, delay:1.5, y:30, stagger:0.2})
