// Select all Bookmarks (Below) //
// const toggleBookmarks = document.querySelectorAll(".bookmark");

// toggleBookmarks.forEach((bookmark) => {
//   function toggle() {
//     bookmark.classList.toggle("bookmark--active");
//   }

//   bookmark.addEventListener("click", toggle);
// });

//-----> Select the first Bookmark <------//

const toggleBookmarkButton = document.querySelector(".bookmark");

function toggleBookmark() {
  toggleBookmarkButton.classList.toggle("bookmark--active");
}

toggleBookmarkButton.addEventListener("click", toggleBookmark);

//--->        ------>

const toggleAnswerButton = document.querySelector(".card__button-answer");
const answer = document.querySelector(".card__answer");

function toggleAnswer() {
  const wasToggled = answer.classList.toggle("card__answer--active");
  toggleAnswerButton.textContent = wasToggled ? "Hide answer" : "Show Answer";
}

toggleAnswerButton.addEventListener("click", toggleAnswer);
