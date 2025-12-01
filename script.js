
    const images = document.querySelectorAll("#container img");
    let current = 0;

    
    images[current].classList.add("active");

    function showImage(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    function next() {
        current++;
        if(current >= images.length) current = 0;
        showImage(current);
    }

    function previous() {
        current--;
        if(current < 0) current = images.length - 1;
        showImage(current);
    }

        setInterval(next, 3000);


