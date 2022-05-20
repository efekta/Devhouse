import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

$(document).ready(function(){

  // mob menu
  $('.burger').on('click', function (e) {
    $('.is-mob').toggleClass('show');
    $('.burger').toggleClass('open');
  })


  $('.dropdown').on('click', function (e) {
    $('.sub-menu').toggleClass('show');
  })
});
