import $ from 'jquery';

class NavScroll {
  constructor() {
    this.nav = $(".navbar-toggle");
    this.events();
  }

  events() {
    // clicking the open modal button
    this.nav.click(this.toggleNav.bind(this));
  }

  toggleNav() {
    console.log('test');
    // Make sure this.hash has a value before overriding default behavior
    // if (this.hash !== "") {
      // Prevent default anchor click behavior
      // event.preventDefault();

      // Store hash
      // var hash = this.hash;
// console.log(hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      // $('html, body').animate({
      //   scrollTop: $(hash).offset().top
      // }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      // });
    // } // End if
  }
}

export default NavScroll;
