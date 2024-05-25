const btnLike1 = document.getElementById("btnLike1")
const count1 = document.getElementById("count1")

function hitLikes1() {
  let totallikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}

btnLike1.addEventListener("click", countLike1)


const btnLike2 = document.getElementById("btnLike2")
const count2 = document.getElementById("count2")

function hitLiks2() {
  let totalLikes2 = parseInt(countLikes2.value) + 1
  countLikes2.textContent = totalLikes2.toString()
}

btnLike2.addEventListener("click", countLike2)
