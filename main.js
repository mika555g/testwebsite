$(document).ready(function() {
  $('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.site-nav').toggleClass('is-active');
  });
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= 75) {
    $('#header').addClass('fixed');
    $('body').addClass('fixed-header');
  } else {
    $('#header').removeClass('fixed');
    $('body').removeClass('fixed-header');
  }
});

function calculate() {
  let sum = 0;
  let squareMeter = document.getElementById('squareMeter').value;
  let modifiers = document.getElementsByName('modifier');

  for (let i = 0; i < modifiers.length; i++) {
    if (modifiers[i].checked) {
      modifier = modifiers[i].value;
      break;
    }
  }

  if (squareMeter <= 50) {
    sum = squareMeter * 10000;
  } else if (squareMeter <= 100) {
    sum = squareMeter * 15000;
  } else {
    sum = squareMeter * 20000;
  }
  total = sum * (modifier / 100);

  document.getElementById('price').value = total;
}

// Get the modal
let pageBody = document.getElementsByTagName('body')[0];
let modal = document.getElementById('modal');
let injectableContent = document.getElementsByClassName('cards-item');
let modalContent = document.getElementById('modal-content');
// Get the element that closes the modal
let closeButton = document.getElementById('close');
let wrapper = document.createElement('div');

modalContent.appendChild(wrapper);

// When the user clicks the button, open the modal
function openModal(i) {
  modal.style.display = 'block';
  pageBody.style.overflow = 'hidden';
  wrapper.className = 'modal-wrapper' + ' ' + injectableContent[i].className;
  wrapper.innerHTML = injectableContent[i].innerHTML;
  style = window.getComputedStyle(injectableContent[i]);
  modalColor = style.getPropertyValue('color');
  wrapper.style.color = modalColor;
}

// When the user clicks on (x), close the modal
closeButton.onclick = function() {
  modal.style.display = 'none';
  pageBody.style.overflow = 'initial';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    pageBody.style.overflow = 'auto';
  }
};
