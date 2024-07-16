
// let trilho = document.getElementById ('trilho')
// let body = document.querySelector('body')

// trilho.addEventListener('click', () => {
//     trilho.classList.toggle('dark')
//     body.classList.toggle('dark')
// })

let trilho = document.getElementById('trilho');
let body = document.querySelector('body');

// Verifica o estado do tema no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        trilho.classList.add('dark');
        body.classList.add('dark');
    }
});

// Alterna entre os temas claro e escuro ao clicar no trilho
trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');

    // Salva o estado do tema no localStorage
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
