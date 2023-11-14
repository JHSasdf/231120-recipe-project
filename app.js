let slideIndex;

$('.hamburger').click(function() {
    $('.hidden-menu').toggleClass('visible');
})

$(document).on("click", ".card" ,function() {
  $('.curtain').addClass('visible');
  $('body').append(`
  <div class="card modal-card">
    <img src=${this.children[0].src} class="card-img-top" alt="image-of-food">
    
    <div class="card-body" style="display: block;">
      <h4 class="card-title">${this.children[1].children[0].textContent}</h4>
      <p class="card-ingredient" style="white-space: pre-wrap;">${this.children[1].children[1].textContent}</p>
      <p class="card-text" style="white-space: pre-wrap;">${this.children[1].children[2].textContent} </p>
    </div>
  </div>`)
})

function removeModals () {
  $('.modal-card').remove();
  $('.curtain').removeClass('visible');
  $('.add-modal-card').removeClass('visible')
}
$('.curtain').click(function () {
    removeModals();
})

function searchInputVisible() {
  $('.search-input').toggleClass('visible')
}

$('.add-card-btn').click(function() {
  $('.add-modal-card').addClass('visible')
  $('.curtain').addClass('visible');
  slideIndex = this.dataset.index;

  $('.confirm-add-card-btn').click(function() {
    if ($('#modal-img').val().length > 0 && $('#modal-name').val().length > 0 &&  $('#modal-ingredient').val().length > 0 && $('#modal-text').val().length > 0 )
    $(`.card-slide-${slideIndex}`).append(`<div class="swiper-slide">
    <div class="card">
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
  })
})



