import './styles.css';

import header from './header';

import home from './home';

import menu from './menu';

import location from './location';

   header()
   home()
  //menu()
  //location()

/*add event listener*/
const select = document.querySelectorAll('.button');

select.forEach((button) => {

    button.addEventListener('click', update)
})


function update (e) {

console.log(e.target.id)
const remove = document.getElementById("remove");

if (e.target.id == 'home') {
   remove.remove()
   home()
}

if (e.target.id == 'menu') {
   remove.remove()
   menu()
}

if (e.target.id == 'location') {
   remove.remove()
   location()
}

}
