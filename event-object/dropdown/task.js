document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        const dropdownValue = dropdown.querySelector(".dropdown__value");
        const dropdownList = dropdown.querySelector(".dropdown__list");

        dropdownValue.addEventListener('mouseover', function() {
            dropdownList.classList.toggle('dropdown__list_active');
        });
        

    const dropdownItems = dropdownList.querySelectorAll('.dropdown__item');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();

        const newValue = item.querySelector('.dropdown__link').textContent;
        dropdownValue.textContent = newValue;
        dropdownList.classList.remove('dropdown__list_active');    
        });
      });     
    });
});