const navy = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav .mob');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('anim_burger');
    })


}


const app = () => {
    navy();
}


app();