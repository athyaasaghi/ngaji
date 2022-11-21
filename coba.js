const tulisan_tombol = document.querySelector('.tulisan_tombol');
tulisan_tombol.addEventListener('mouseenter', function() {
    tulisan_tombol.style.backgroundColor = 'grey';
});


tulisan_tombol.addEventListener('mouseleave', function() {
    tulisan_tombol.style.backgroundColor = 'rgba(197, 181, 181, 0.2)';
    tulisan_tombol.style.boxShadow = '0 7px 3px rgba(0,0,0, 0.9)';
});

tulisan_tombol.addEventListener('click', function() {
    tulisan_tombol.style.boxShadow = '7 0px 3px rgba(0,0,0, 0)';
});

tulisan_tombol.addEventListener('click', function() {
     swal("Hai", "Terimakasih telah menyukai halaman ini", "success");
});



