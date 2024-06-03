
    const motivationalQuotes = [
        "\"El único modo de hacer un gran trabajo es amar lo que haces.\" - Steve Jobs 💻",
        "\"No te rindas. El principio es siempre la parte más difícil.\" - Anónimo 💪",
        "\"El éxito es la suma de pequeños esfuerzos repetidos día tras día.\" - Robert Collier 📈",
        "\"Aprender a programar es aprender a crear y resolver problemas.\" - Anónimo 🧩",
        "\"La paciencia, la persistencia y el sudor hacen una combinación imbatible para el éxito.\" - Napoleon Hill 🏅",
        "\"No hay atajos en el camino hacia cualquier lugar que valga la pena ir.\" - Beverly Sills 🚀",
        "\"El camino al éxito está siempre en construcción.\" - Lily Tomlin 🛠️",
        "\"El aprendizaje nunca agota la mente.\" - Leonardo da Vinci 📚",
        "\"La práctica no es lo que uno hace una vez que es bueno, es lo que uno hace que se vuelve bueno.\" - Malcolm Gladwell 🏋️",
        "\"Tu tiempo es limitado, así que no lo desperdicies viviendo la vida de otra persona.\" - Steve Jobs ⏳"
    ];
    
    const displayRandomQuote = () => {
        const quoteElement = document.getElementById('motivational-quote');
        const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
        quoteElement.innerText = motivationalQuotes[randomIndex];
    };
    
    const countdown = () => {
        const deadline = new Date('2024-06-03T23:59:59').getTime();
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
    
    document.addEventListener('DOMContentLoaded', () => {
        displayRandomQuote();
        countdown();
        setInterval(countdown, 1000);
    });
    
