var images = document.querySelectorAll('img');

for (var i = 0; i < images.length; i++) {
    if (images[i].id.includes("img1") || images[i].id.includes("img2") || images[i].id.includes("img3") || images[i].id.includes("img4") || images[i].id.includes("img5") || images[i].id.includes("img6") || images[i].id.includes("img7") || images[i].id.includes("img8") || images[i].id.includes("img9") || images[i].id.includes("img10") || images[i].id.includes("img11") || images[i].id.includes("img12")) {
        images[i].addEventListener('click', function () {
            var popup = document.getElementById('image-popup');
            var popup_back = document.getElementById('image-popup-back');
            var closeButton = document.createElement('button');
            closeButton.innerHTML = 'Close';

            closeButton.addEventListener('click', function () {
                popup.style.display = 'none';
                popup_back.style.display = 'none';
                popup.removeChild(img);
                popup.removeChild(closeButton);
            });

            popup.style.display = 'grid';
            popup_back.style.display = 'block';
            popup.appendChild(closeButton);

            var img = document.createElement('img');
            img.src = this.src;

            popup.appendChild(img);
        });
    }
}