import Hello from './hello';

jQuery($ => {
  let hello = new Hello();
  $('#main').text(hello.world());
});
