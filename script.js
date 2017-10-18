
$(document).ready(function() {
  createNewCard();
  disableBtn();
  bkmCounter();
  readCounter();
});

//Global variables
var titleInput = $('.bkm-title');
var urlInput = $('.bkm-url');
var cardId = 0;

function disableBtn() {
  $('.create-bkm').removeClass('enabled-btn').addClass('disabled-btn').attr('disabled', true);
}

function enableBtn() {
  $('.create-bkm').attr('disabled', false).removeClass('disabled-btn').addClass('enabled-btn');
}

titleInput.on('keyup', enableBtn)
urlInput.on('keyup', enableBtn)

$('.deleteReadBtn').click(function(){
  $('.read').remove();
  readCounter();
  $('.card-counter').html($('.bookmark-card').length);
});

function readEventListener(btnClass) {
  $("." + btnClass).click(function(){
    $("." + btnClass).toggleClass('read');
    $("." + btnClass).parent().toggleClass('read');
    readCounter();
  })
}

var linkCount = document.links.length;

function createNewCard() {
  $('.create-bkm').click(function(e){
    cardId = cardId + 1
    e.preventDefault();
    inputMissing();
    $('.bkm-title, .bkm-url').val('');
    $('.bkm-title, .bkm-url').prop('disabled', true);
    $('.bkm-title, .bkm-url').prop('disabled', false);
    disableBtn();
    
    //when 'enter' is clicked
    // grab value of the title box and call it title
    var title = $('.bkm-title').val()
    var url = $('.bkm-url').val()
    var btnClass = `read-btn-${cardId}`
    readEventListener(btnClass);
    $(`.delete`).on('click', deleteCard);
    $(`.delete`).on('click', readCounter);
    });
}

function inputMissing() { 
  var errorDisplay = $('.errorDisplay');
  if (titleInput.val().length === 0 && urlInput.val().length === 0) {
    disableBtn();
    return;
  }
  else if (urlInput.val().length === 0) {
    errorDisplay.text('Missing Website URL');
    return;
  }
  else if (titleInput.val().length === 0) {
    errorDisplay.text('Missing Website Title');
    return;
  }
  else if (validateURL(urlInput.val()) === false) {
    errorDisplay.text('Not a valid URL');
  }
  else {
    errorDisplay.text('');
    var title = $('.bkm-title').val()
    var url = $('.bkm-url').val()
    var btnClass = `read-btn-${cardId}`
    cardCounter = $('.bookmark-card').length;
    $('.column2').append(`<article class="bookmark-card"><h2 class="Title">${title}</h2><hr><a href="${url}">${url}</a><hr><button class="read-btn ${btnClass}">Read</button><button class="delete">Delete</button></article>`)

  }
};

function bkmCounter() {
  $('.create-bkm').click(function() {
    $('.card-counter').html($('.bookmark-card').length)
  })
}

function readCounter() {
  $('.read-counter').html($('article.read').length) 
}

function deleteCard() {
  $(this).parent().remove();
  console.log($('.bookmark-card').length)
  $('.card-counter').html($('.bookmark-card').length);
};

function validateURL(value) {
    return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
    };



