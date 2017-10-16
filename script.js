
$(document).ready(function() {
  createNewCard();
});

//Global variables
var titleInput = $('.bkm-title');
var urlInput = $('.bkm-url');

var cardId = 0;


function readEventListener(btnClass) {
  $("." + btnClass).click(function(){
    $("." + btnClass).toggleClass('read');
    $("." + btnClass).parent().toggleClass('read');
  })
}


function createNewCard() {
  $('.create-bkm').click(function(e){
    cardId = cardId + 1
    e.preventDefault();
    inputMissing();

    //when 'enter' is clicked
    // grab value of the title box and call it title
    var title = $('.bkm-title').val()
    var url = $('.bkm-url').val()
    var btnClass = `read-btn-${cardId}`
    //same for ur
    // $('.column2').append(`<article><h2 class="Title">${title}</h2><hr><a href="${url}">${url}</a><hr><button class="read-btn ${btnClass}">Read</button><button class="delete">Delete</button></article>`)
    readEventListener(btnClass);
    $(`.delete`).on('click', deleteCard);
  });
}


function inputMissing() { 
  var errorDisplay = $('.errorDisplay');
  if (titleInput.val().length === 0 && urlInput.val().length === 0) {
    errorDisplay.text('Missing Website Title and URL');
    return;
  }
  else if (titleInput.val().length === 0) {
    errorDisplay.text('Missing Website Title');
    return;
  }
  else if (urlInput.val().length === 0) {
    errorDisplay.text('Missing Website URL');
    return;
  }
  else {
    errorDisplay.text('');
    var title = $('.bkm-title').val()
    var url = $('.bkm-url').val()
    var btnClass = `read-btn-${cardId}`
    $('.column2').append(`<article><h2 class="Title">${title}</h2><hr><a href="${url}">${url}</a><hr><button class="read-btn ${btnClass}">Read</button><button class="delete">Delete</button></article>`)

  }
};


function deleteCard() {
  $(this).parent().remove();
};





