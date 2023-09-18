window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar_top");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


  
  //Get the button
  let mybutton = document.getElementById("btn-back-to-top");
  const toTop = () => window.scrollTo(0, 0);
  mybutton.addEventListener("click", toTop);


  // Function to move carousel to the selected slide
  function goToSlide(slideIndex) {
    var carousel = document.querySelector('#carouselExampleIndicators2');
    var indicators = document.querySelectorAll('.ind button');
    var carouselItems = document.querySelectorAll('.sec');
    console.log(indicators);
    // Remove active class from all carousel indicators and items
    indicators.forEach(function (indicator) {
      indicator.classList.remove('active');
    });
    carouselItems.forEach(function (item) {
      item.classList.remove('active');
    });

    // Set active class to the selected indicator and item
    indicators[slideIndex].classList.add('active');
    carouselItems[slideIndex].classList.add('active');
  }

  // Event listener for select

  var carSelect = document.getElementById('carSelect');
  carSelect.addEventListener('change', function (e) {
    var slideIndex = this.value;
    goToSlide(slideIndex);
  });

  // Event listener for link clicks
  const actionLinks = document.querySelectorAll('.action a');
  actionLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const slideIndex = link.getAttribute('data-slide');
      goToSlide(slideIndex);
    });
  });
