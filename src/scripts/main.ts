console.log('Hello world!');

document.getElementById('animate-numeronym').onclick = () => {
    const h2 = document.querySelector('#a11y h2');
    if (!h2.classList.contains('animated')) {
        h2.classList.add('animating');
        setTimeout(() => {
            h2.classList.remove('animating');
            h2.classList.add('animated');
        }, 250);
    }
}