// JavaScript to show the loading spinner on link click
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('loading').style.display = 'block';
      
      setTimeout(() => {
        window.location.href = this.href;
      }, 2000); // Delay for 2 seconds before navigating
    });
  });
});
