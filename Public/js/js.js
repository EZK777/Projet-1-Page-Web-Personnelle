// Animation boutton et message

document.getElementById('bouton').addEventListener('click', function() {
    var bulle = document.getElementById('bulle');
    

    bulle.style.display = 'block';
    bulle.style.opacity = 1;
    bulle.style.transition = 'transform 5s ease-in-out, opacity 7s ease-in-out';
    bulle.style.transform = 'translateY(0)';
    
    setTimeout(function() {
        bulle.style.transform = 'translateY(-60px)';
        bulle.style.opacity = 0;
    }, 100); 

    setTimeout(function() {
        bulle.style.display = 'none';
    }, 5000); 
});