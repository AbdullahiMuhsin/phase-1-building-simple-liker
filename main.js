// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



const likeButtons = document.querySelectorAll('.like');


const likeCounts = {};

// Add event listeners to each "Like" button
likeButtons.forEach((button) => {
  const postId = button.closest('.media-post').id; // Get the post ID from the parent element
  likeCounts[postId] = 0;
  button.addEventListener('click', () => {
  
    likeCounts[postId] += 1;

    
    const likeGlyph = button.querySelector('.like-glyph');
    likeGlyph.textContent = '❤️'; 
    button.classList.add('liked'); 
    button.querySelector('.like-count').textContent = likeCounts[postId];
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
