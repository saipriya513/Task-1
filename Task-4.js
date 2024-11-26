// Optional: You can use JavaScript for additional interactivity, such as smooth scrolling or animations
document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelectorAll('.btn');
  
    btns.forEach(btn => {
      btn.addEventListener('click', function() {
        alert('You clicked a button!');
      });
    });
  });
  