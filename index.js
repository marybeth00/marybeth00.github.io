const btnLikes1 = document.getElementById("btnLike1")
const btnLikes2 = document.getElementById("btnLike2")

const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")

const btnDislikes1 = document.getElementById("btnDislike1")
const btnDislikes2 = document.getElementById("btnDislike2")

const countDislikes1 = document.getElementById("countDislike1")
const countDislikes2 = document.getElementById("countDislike2")

function hitLikes1() {
   let totalLikes1 = parseInt(countLikes1.value) + 1
   countLikes1.textContent = totalLikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)

function hitLikes2() {
   let totalLikes2 = parseInt(countLikes1.value) + 1
   countLikes2.textContent = totalLikes2.toString() 
} 
btnLike2.addEventListener("click",hitLikes2)

function hitDislikes1() {
  let totalDislikes1 = parseInt(countDislikes1.value) + 1
   countDislikes1.textContent = totalDislikes1.toString()
}
btnDislike1.addEventListener("click",hitDislikes1)

function hitDislikes2() {
  let totalDislikes2 = parseInt(countDislikes2.value) + 1
   countDislikes2.textContent = totalDislikes2.toString()
}
btnDislike2.addEventListener("click",hitDislikes2)

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")

function submitComment(){ 
commentbox.textContent += comment.value.toString() + "\n"
}
submit.addEventListener("click", submitComment)
