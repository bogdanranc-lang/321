class ImageGallery {
    constructor() {
        this.images = [
            {
                src: 'https://picsum.photos/600/450?random=1',
                title: 'Beautiful Landscape'
            },
            {
                src: 'https://picsum.photos/600/450?random=2',
                title: 'Mountain View'
            },
            {
                src: 'https://picsum.photos/600/450?random=3',
                title: 'Nature Scene'
            },
            {
                src: 'https://picsum.photos/600/450?random=4',
                title: 'Scenic Beauty'
            },
            {
                src: 'https://picsum.photos/600/450?random=5',
                title: 'Wonderful View'
            }
        ];

        this.currentIndex = 0;
        this.init();
    }

    init() {
        // Get DOM elements
        this.imageElement = document.querySelector('.gallery-image');
        this.currentIndexElement = document.getElementById('current-index');
        this.totalImagesElement = document.getElementById('total-images');
        this.imageTitleElement = document.getElementById('image-title');
        this.prevBtnNav = document.querySelector('.prev-btn');
        this.nextBtnNav = document.querySelector('.next-btn');
        this.prevBtnControl = document.querySelector('.control-btn.prev-btn-text');
        this.nextBtnControl = document.querySelector('.control-btn.next-btn-text');

        // Set total images
        this.totalImagesElement.textContent = this.images.length;

        // Display initial image
        this.displayImage();

        // Add event listeners for buttons
        this.prevBtnNav.addEventListener('click', () => this.previousImage());
        this.nextBtnNav.addEventListener('click', () => this.nextImage());
        this.prevBtnControl.addEventListener('click', () => this.previousImage());
        this.nextBtnControl.addEventListener('click', () => this.nextImage());

        // Add keyboard event listener
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }

    displayImage() {
        const image = this.images[this.currentIndex];
        this.imageElement.src = image.src;
        this.imageElement.alt = image.title;
        this.imageTitleElement.textContent = image.title;
        this.currentIndexElement.textContent = this.currentIndex + 1;
    }

    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.displayImage();
    }

    previousImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.displayImage();
    }

    handleKeyPress(event) {
        if (event.key === 'ArrowRight') {
            this.nextImage();
        } else if (event.key === 'ArrowLeft') {
            this.previousImage();
        }
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ImageGallery();
});
