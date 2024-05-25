const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")

function hitLikes1() {
  let totallikes1=parseInt(countLikes1.value) + 1
  countLikes1.textContentb = totalLikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)
