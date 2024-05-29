const countdown = () => {
    const deadline = new Date('2024-05-31T23:59:59').getTime();
    const now = new Date().getTime();
    const timeRemaining = deadline - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (timeRemaining < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = '<h2>¡El tiempo ha terminado! ¡Entrega tus proyectos ahora!</h2>';
    }
};

const interval = setInterval(countdown, 1000);
countdown();