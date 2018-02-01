"use strict"
let s = location.hostname.split('.')[0]
let opp = s === 'www' ? '简历' : '主页'
$('body').append('<div class="panel"><div class="title">改变'+opp+'的背景色</div><div class="btn" data-color="red">红色</div><div class="btn" data-color="green">绿色</div><div class="btn" data-color="blue">蓝色</div></div>')

$('.btn').click(function () {
  chrome.runtime.sendMessage({
    color: $(this).data('color')
  }, function (response) {
    // console.log(response)
    alert('另一个网页已成功修改了背景色为 ' + response.colorCode)
  })
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  let colorCode = request.color === 'red' ? '#ff0000' : request.color === 'green' ? '#00ff00' : '#0000ff'
  $('body').css('backgroundColor', colorCode)
  sendResponse({
    colorCode: colorCode
  })
})