const video = document.querySelector('video');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

observer.observe(video);
// Get the dropdown button and content elements
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

// Add a click event listener to the dropdown button
dropdownBtn.addEventListener('click', function() {
  // Toggle the visibility of the dropdown content
  dropdownContent.classList.toggle('show');
});
function Email() 
{
    alert("Email-ashishtyagi118@gmail.com")    
};

