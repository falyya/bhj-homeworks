let tooltipElem;

document.addEventListener('click', function(event) {
    event.preventDefault();
    let target = event.target;

    let tooltipText = target.getAttribute('title');
    if (!tooltipText) return;

    tooltipElem = document.createElement("div");
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipText;
    tooltipElem.classList.add('tooltip_active');
    document.body.append(tooltipElem);

    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left <  0) left = 0;
    
    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
});

document.onmouseout = function(e) {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
}


