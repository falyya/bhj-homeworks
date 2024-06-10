class adRotator {
    constructor() {
        this.rotatorElements = document.querySelectorAll('.rotator__case');
        this.currentIndex = 0;
        this.startRotation();
    }

    startRotation() {
        this.intervalId = setInterval(() => {
            this.rotate();
        }, 1000);
    }

    rotate() {
        const currentElement = this.rotatorElements[this.currentIndex];
        currentElement.classList.remove('rotator__case_active');

        this.currentIndex++;
        
        if (this.currentIndex >= this.rotatorElements.length) {
            this.currentIndex = 0;
        }

        const nextElement = this.rotatorElements[this.currentIndex];
        nextElement.classList.add('rotator__case_active');
        nextElement.style.color = nextElement.dataset.color;
    }
}

new adRotator();