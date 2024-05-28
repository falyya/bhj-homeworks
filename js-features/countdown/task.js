document.addEventListener('DOMContentLoaded', function () {

    let seconds = 100;

    function timeFormat(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor ((seconds % 3600) / 60);
        const second = seconds % 60;

        const timeFormatting = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(second).padStart(2,'0')}`;
        return timeFormatting;
    }

    function timer() {
        if (seconds > 0) {
            seconds--;
            document.getElementById('timer').textContent = timeFormat(seconds);
            setTimeout(timer, 1000);
        } else {
            location.assign("https://news.store.rambler.ru/img/fe3b8a4bf5da27d81e5b265f5f5afff1?img-format=auto&img-1-resize=height:565,fit:max&img-2-filter=sharpen");
        }
    }
    timer();
})