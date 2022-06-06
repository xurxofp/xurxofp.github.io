 (function($) {
     $(function() {

         $('.sidenav').sidenav();
         $('.parallax').parallax();
         $('.slider').slider();
         $('.scrollspy').scrollSpy();
         $('.tooltipped').tooltip();

     }); // end of document ready
 })(jQuery); // end of jQuery name space

 var elem = document.querySelector('.fixed-action-btn');
 var instance = M.FloatingActionButton.init(elem, {
     direction: 'left'
 });


 const items = document.querySelectorAll('#timeline > ul > li');

 const isInViewport = el => {
     const rect = el.getBoundingClientRect();
     return (
         rect.top >= 0 &&
         rect.left >= 0 &&
         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || documen.documentElement.clientWidth)
     );
 };

 const run = () => items.forEach(item => {
     if (isInViewport(item)) {
         item.classList.add('show');
     }
 });

 window.addEventListener('load', run);
 window.addEventListener('resize', run);
 window.addEventListener('scroll', run);

 function htmlTranslate(language) {
     console.log(language)
     const arr = ['es', 'en'];
     if (arr.includes(language)) {
         let lang = ':lang(' + language + ')';
         let hide = '[lang]:not(' + lang + ')';
         document.querySelectorAll(hide).forEach(function(node) {
             node.style.display = 'none';
         });
         let show = '[lang]' + lang;
         document.querySelectorAll(show).forEach(function(node) {
             node.style.display = 'unset';
         });
     } else {
         console.log('Language not supported');
     }
 }


 function localize(language) {
     if (['de'].includes(language)) {
         let lang = ':lang(' + language + ')';
         let hide = '[lang]:not(' + lang + ')';
         document.querySelectorAll(hide).forEach(function(node) {
             node.style.display = 'none';
         });
         let show = '[lang]' + lang;
         document.querySelectorAll(show).forEach(function(node) {
             node.style.display = 'unset';
         });
     }
 }