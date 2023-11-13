$('.hamburger').click(function() {
    $('.hidden-menu').toggleClass('visible');
})





$('.card').click(function() {
    $('.curtain').toggleClass('visible');
    $('body').append(`
    <div class="card modal-card">
      <img src=${this.children[0].src} class="card-img-top" alt="image-of-food">
      
      <div class="card-body" style="display: block;">
        <p class="card-title">${this.children[1].children[0].textContent}</p>
        <p class="card-text" style="white-space: pre-wrap;">${this.children[1].children[1].textContent}</p>
      </div>
    </div>`)
})

$('.curtain').click(function () {
    $('.modal-card').remove();
    $('.curtain').toggleClass('visible');  
})

function searchInputVisible() {
  $('.search-input').toggleClass('visible')
}
