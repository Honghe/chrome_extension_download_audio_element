chrome.runtime.onMessage.addListener(function(request) {
    if(request.action === 'executeCode') {
        console.log('executeCode');
        var audio_src = document.getElementsByTagName('audio')[0].src;
        window.open(audio_src,'_blank')
    }
});