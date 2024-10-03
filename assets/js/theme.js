const toggleBtn = document.querySelector('.dark-mode-btn');
const icon = document.getElementById('theme-mode-icon');

toggleBtn.addEventListener('click', () => {
    if (icon.classList.contains("bx-sun")){
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
    }
    else {
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
    }
});
