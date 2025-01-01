function changeImage(imageId) {
    const img = document.getElementById(imageId);
    const randomNum = Math.floor(Math.random() * 1000);
    img.src = `https://picsum.photos/200/150?random=${randomNum}`;
}
