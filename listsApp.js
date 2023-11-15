let slideIndex;
let card;
let index = 18;


function removeModals () {
  $('.modal-card').remove();
  $('.curtain').removeClass('visible');
  $('.add-modal-card').removeClass('visible')
}

$('.hamburger').click(function() {
    $('.hidden-menu').toggleClass('visible');
})

$(document).on("click", ".food-card" ,function() {
  card = this;
  $('.curtain').addClass('visible');
  $('body').append(`
  <div class="card modal-card">
    <img src=${card.children[0].src} class="card-img-top" alt="image-of-food">  
    <div class="card-body" style="display: block;">
    <div class="likes"><div><button class="like-btn"><i class="bi bi-hand-thumbs-up"></i></button> <span>${this.dataset.numberoflikes}</span></div>
       </div>
      <h4 class="card-title">${card.children[1].children[0].textContent}</h4>
      <p class="card-ingredient" style="white-space: pre-wrap;">${card.children[1].children[1].textContent}</p>
      <p class="card-text" style="white-space: pre-wrap;">${card.children[1].children[2].textContent} </p>
    </div>
  </div>`)
  if (card.dataset.mylike == '1') {
    $($('.like-btn')[0].children[0]).addClass('blue');
  }


})

$(document).on('click', '.like-btn', function() {
  if (JSON.parse(window.localStorage.getItem('isLoggedin'))) {
    if (card.dataset.mylike < 1) {
  card.dataset.numberoflikes = parseInt(card.dataset.numberoflikes) + 1;
  $('.likes span')[0].textContent = card.dataset.numberoflikes;
  $('.like-list').append(`<li><button class="find-card-btn"><span class="invisible">${card.dataset.index}</span> <span>${card.children[1].children[0].textContent}</span></button></li>`)
  card.dataset.mylike = parseInt(card.dataset.mylike) + 1;
  $($('.like-btn')[0].children[0]).addClass('blue');

}
}
})

$('.container-of-like').click(function() {
  $('.like-list').toggleClass('visible')
})

$(document).on('click', '.find-card-btn', function() {
    for (const card of $('.food-card')) {
      if (this.children[0].textContent === card.dataset.index) {
        $('.curtain').addClass('visible');
        $('body').append(`
        <div class="card modal-card">
          <img src=${card.children[0].src} class="card-img-top" alt="image-of-food">  
          <div class="card-body" style="display: block;">
          <div class="likes"><div><button class="like-btn"><i class="bi bi-hand-thumbs-up"></i></button> <span>${card.dataset.numberoflikes}</span></div>
             </div>
            <h4 class="card-title">${card.children[1].children[0].textContent}</h4>
            <p class="card-ingredient" style="white-space: pre-wrap;">${card.children[1].children[1].textContent}</p>
            <p class="card-text" style="white-space: pre-wrap;">${card.children[1].children[2].textContent} </p>
          </div>
        </div>`)
      }
    }
    $($('.like-btn')[0].children[0]).addClass('blue');
})

$('.curtain').click(function () {
    removeModals();
})

function searchInputVisible() {
  $('.search-input').toggleClass('visible')
}

$(document).on('click', '.add-card-btn', function() {
  $('.add-modal-card').addClass('visible')
  $('.curtain').addClass('visible');
  slideIndex = this.dataset.countryindex;

  $(document).on('click', '.confirm-add-card-btn', function() {
    if ($('#modal-img').val().length > 0 && $('#modal-name').val().length > 0 &&  $('#modal-ingredient').val().length > 0 && $('#modal-text').val().length > 0 ) {
    $(`.card-slide-${slideIndex}`).append(`<div class="swiper-slide">
    <div class="card food-card" data-mylike="0" data-index="${index++}" data-numberoflikes="0">
      <img
        src= ${$('#modal-img').val()}
        class="card-img-top"
        alt="image-of-food"
      />

      <div class="card-body">
        <h4 class="card-title">${$('#modal-name').val()}</h4>
        <p class="card-ingredient">${$('#modal-ingredient').val()}</p>
        <p class="card-text">${$('#modal-text').val()}
        </p>
      </div>
    </div>
  </div>`)
  $('#modal-img').val("")
  $('#modal-name').val("")
  $('#modal-ingredient').val("")
  $('#modal-text').val("")

  removeModals();
    }
  })
})





