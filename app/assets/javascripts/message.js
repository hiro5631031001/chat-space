$(function(){
    function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image) {
      var html =  `<div class="message">
                    <div class="message__info">
                    <p class="message__info__user">
                      ${ message.user_name }
                    </p>
                    <p class="message__info__date">
                      ${ message.created_at }
                    </p>
                    </div>
                    <p class="message__text">
                      ${ message.text}
                    <img src = ${message.image}>
                    </p>
                  </div>`
      return html;
    } else {
      var html = `<div class="message">
                    <div class="message__info">
                    <p class="message__info__user">
                     ${ message.user_name }
                    </p>
                    <p class="message__info__date">
                     ${ message.created_at }
                    </p>
                    </div>
                    <p class="message__text">
                     ${message.text}
                    </p>
                  </div>`
      return html;
    };
  }


  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax ({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat__message-list').append(html);
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージの送信に失敗しました");
    })
  });
});