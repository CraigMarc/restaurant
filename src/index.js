import './styles.css';

import header from './header';

import home from './home';

import menu from './menu';

import location from './location';

   header()
   home()
  

/*add event listener*/
const select = document.querySelectorAll('.button');

select.forEach((button) => {

    button.addEventListener('click', update)
})


function update (e) {

const homeClick = document.getElementById("home")
const menuClick = document.getElementById("menu")
const locationClick = document.getElementById("location")

const remove = document.getElementById("remove");

if (e.target.id == 'home') {
   homeClick.style.borderBottom = 'solid'; 
   menuClick.style.borderBottom = 'none'; 
   locationClick.style.borderBottom = 'none'; 
   remove.remove()
   home()
}

if (e.target.id == 'menu') {
   homeClick.style.borderBottom = 'none'; 
   menuClick.style.borderBottom = 'solid'; 
   locationClick.style.borderBottom = 'none'; 
   remove.remove()
   menu()
}

if (e.target.id == 'location') {
   homeClick.style.borderBottom = 'none'; 
   menuClick.style.borderBottom = 'none'; 
   locationClick.style.borderBottom = 'solid'; 
   remove.remove()
   location()
}

}
