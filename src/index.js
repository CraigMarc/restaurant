import './styles.css';

import header from './header';

import home from './home';

import menu from './menu';

import location from './location';

   header()
   //home()
  //menu()
  location()

/*add event listener*/
const select = document.querySelectorAll('.button');

select.forEach((button) => {

    button.addEventListener('click', update)
})


function update (e) {
console.log(e)
console.log(e.target.id)
}
