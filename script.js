const darkmode_btn = document.querySelector('#darkmode');
const darkmode_btn_mobile = document.querySelector('#darkmode-mobile');
const root = document.documentElement;

let darkMode = false;

darkmode_btn.addEventListener('click', ()=> {

    if (darkMode === false) {
        root.style.setProperty('--color-theme-1', 'rgb(43, 41, 72)');
        root.style.setProperty('--color-theme-2', 'rgb(255, 255, 255)');
        root.style.setProperty('--color-theme-3', 'rgb(43, 34, 56)');
        root.style.setProperty('--color-theme-4', 'rgb(255, 255, 255)');
        root.style.setProperty('--color-theme-5', 'rgb(35, 36, 52)');
        root.style.setProperty('color', 'white');
        root.style.setProperty('fill', 'white');
        darkMode = true;
    } else {
        root.style.setProperty('--color-theme-1', 'rgb(255, 243, 234)');
        root.style.setProperty('--color-theme-2', 'rgb(0, 0, 0)');
        root.style.setProperty('--color-theme-3', 'rgb(255, 119, 0)');
        root.style.setProperty('--color-theme-4', 'rgb(43, 43, 43)');
        root.style.setProperty('--color-theme-5', 'rgb(247, 176, 142');
        root.style.setProperty('color', 'black');
        root.style.setProperty('fill', 'black');
        darkMode = false;
    }
})

darkmode_btn_mobile.addEventListener('click', ()=> {

    if (darkMode === false) {
        root.style.setProperty('--color-theme-1', 'rgb(43, 41, 72)');
        root.style.setProperty('--color-theme-2', 'rgb(255, 255, 255)');
        root.style.setProperty('--color-theme-3', 'rgb(43, 34, 56)');
        root.style.setProperty('--color-theme-4', 'rgb(255, 255, 255)');
        root.style.setProperty('--color-theme-5', 'rgb(35, 36, 52)');
        root.style.setProperty('color', 'white');
        root.style.setProperty('fill', 'white');
        darkMode = true;
    } else {
        root.style.setProperty('--color-theme-1', 'rgb(255, 243, 234)');
        root.style.setProperty('--color-theme-2', 'rgb(0, 0, 0)');
        root.style.setProperty('--color-theme-3', 'rgb(255, 119, 0)');
        root.style.setProperty('--color-theme-4', 'rgb(43, 43, 43)');
        root.style.setProperty('--color-theme-5', 'rgb(247, 176, 142');
        root.style.setProperty('color', 'black');
        root.style.setProperty('fill', 'black');
        darkMode = false;
    }
})