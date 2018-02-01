chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // 收到message
    // 判断是不是简历
    let urlPattern = []
    if (!/me\./.test(sender.url)) {
      urlPattern.push('https://me.gxxsite.com/*')
    }
    if (!/www\./.test(sender.url)) {
      urlPattern.push('https://www.gxxsite.com/*')
    }
    // console.log(urlPattern)
    chrome.tabs.query({url: urlPattern}, (tabs) => {
      if (tabs) {
        for (let i = 0; i < tabs.length; i++) {
          chrome.tabs.sendMessage(tabs[i].id, {color: request.color}, function(response) {
            sendResponse({
              ok: 1,
              colorCode: response.colorCode
            })
          })
        }
      } else {
        sendResponse({
          ok: 0
        })
      }
    })
    return true
  }
)