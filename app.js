const overlay = document.querySelector("#overlay");
const inputBox = document.querySelector("#input");
const button = document.querySelector("#btn");
const cartParent = document.querySelector("#parent");
const deleteCart = document.querySelector(".delete");


inputBox.addEventListener("focus", () => {
  overlay.style.visibility = "visible"
})
inputBox.addEventListener("blur", () => {
  overlay.style.visibility = "hidden"
})

const fetchRecipes = async (food) => {
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
  const response = await data.json();
  response.meals.forEach(meal => {
    const cartDiv = document.createElement('div');
    cartDiv.classList.add('cart');
    cartDiv.innerHTML = `
          <div class="top"><img src="${meal.strMealThumb}" alt=""></div>
          <div class="bottom">
            <h3>${meal.strMeal}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat tempore minima.</p>
            <button>Booking</button>
          </div>
    `
    cartParent.appendChild(cartDiv);
  })
}

button.addEventListener("click", () => {
  const searchInput = inputBox.value.trim();
  fetchRecipes(searchInput);
  document.getElementById("del1").style.display = "none";
  document.getElementById("del2").style.display = "none";
  document.getElementById("del3").style.display = "none";
})

