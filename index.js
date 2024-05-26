const btnLike1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")

function hitLikes1() {
  let likeCounts = parseInt(count1.value) + 1
  count1.textContent = likeCounts.toString()
}

btnLike1.addEventListener("click", hitLikes2)

const btnLike2 = document.getElementById("btnLike2")
const countLikes2 = document.getElementById("countLikes2")

function hitLikes2() {
  let likeCounts = parseInt(count2.value) + 1
  count2.textContent = likeCounts.toString()
}

btnLike2.addEventListener("click", hitLike2)
