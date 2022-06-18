let counter = document.getElementById("counter");

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const reset = document.getElementById("restart");
const like = document.getElementById("heart");
const likes = document.getElementsByClassName("likes");
const pause = document.getElementById("pause");
const buttons = document.querySelectorAll("button");
const commentList = document.getElementById("list");
const comment = document.getElementById("comment-input");
const submit = document.getElementById("submit");
let paused = false;
setInterval(() => {
  if (!paused) {
    counter.innerHTML++;
  }
}, 1000);

//toggle pause and resume
const togglePaused = () => {
  paused = !paused;
  if (paused) {
    buttons.forEach((button) => {
      button.disabled = true;
      pause.disabled = false;
    });
    pause.innerHTML = "resume";
    console.log("paused");
  } else {buttons.forEach((button) => {
    button.disabled = false;
  });

  pause.innerHTML = "pause";
  console.log("unpaused");
}
};

function resetCounter() {
counter.innerHTML = 0;
}

reset.addEventListener("click", resetCounter);

function minusCounter() {
counter.innerHTML = parseInt(counter.innerHTML) - 1;
}
minus.addEventListener("click", minusCounter);
function plusCounter() {
counter.innerHTML = parseInt(counter.innerHTML) + 1;
}
plus.addEventListener("click", plusCounter);
let likeTimes = 0;
function likeCounter() {
likeTimes = +1;
let list = document.createElement("li");
list.innerHTML =
  counter.innerHTML + " has been liked" + " " + likeTimes + " " + "times";
  likes[0].appendChild(list);
  console.log(likeTimes);
}
like.addEventListener("click", likeCounter);
pause.addEventListener("click", togglePaused);
function submitComment(event) {
  event.preventDefault();
  let list = document.createElement("p");
  list.innerHTML = comment.value;
  commentList.appendChild(list);
  comment.value = "";
}
submit.addEventListener("click", submitComment);


