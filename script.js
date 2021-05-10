var modal = null

window.onload = init
function init() {
  // Get the modal
  modal = document.getElementById("myModal");

  
  var parent = document.getElementById("parent");
  console.log(parent)


  var cards = Array.from(parent.getElementsByClassName("card"));
  console.log(cards)
  cards.map((card)=>{card.addEventListener("click",toggleModal)})

  
  var closeModal = document.getElementById("closeModal")
  closeModal.addEventListener("click",toggleOff)

  mybutton = document.getElementById("myBtn")

  window.onscroll = function() {scrollFunction()}
}



function toggleModal(event) {
  var target = event.target.parentElement || event.srcElement || event.target
  var id = target.id
  console.log(target)
  console.log(id)
  var innerModal = document.getElementById("innerModal")
  innerModal.innerHTML = document.getElementById(id).innerHTML
  modal.style.display = "block"
}

function toggleOff(event) {
  modal.style.display = "none"
}

function imageOrder() {
  console.log("swap") 
  var element = document.getElementById("pictures");
  element.classList.toggle("row-reverse");
}


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}