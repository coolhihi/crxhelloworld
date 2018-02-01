$(function () {
  $('.btn').click(function () {
    chrome.runtime.sendMessage({
      color: $(this).data('color')
    }, function (response) {
      // console.log(response)
      // alert('已成功修改主页和简历背景色为 ' + response.colorCode)
    })
  })
})
