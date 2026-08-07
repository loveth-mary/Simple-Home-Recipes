function loadNavbar() {
    document.querySelector(".navbar").innerHTML = `<a href="index.html">Home</a>
    <a href="recipes.html">Recipes</a>
    <a href="meal-plan.html">Meal Plan</a>
    <a href="submit-recipe.html">Submit Recipe</a>`;
}


function loadInstructionNavbar() {
    document.querySelector(".navbar").innerHTML = `<a href="../index.html">Home</a>
    <a href="../recipes.html">Recipes</a>
    <a href="../meal-plan.html">Meal Plan</a>
    <a href="../submit-recipe.html">Submit Recipe</a>`;
}


function loadFooter () {
    document.querySelector(".footer").innerHTML = `<p>&copy 2026 Simple Home Recipes</p>`;
}


// Making form to submit via WhatsApp
const recipeForm = document.getElementById("recipeForm");

if (recipeForm) {

    recipeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const yourName = document.getElementById("yourName").value;

        const phone = document.getElementById("phone").value;

        const recipeName = document.getElementById("recipeName").value;

        const description = document.getElementById("description").value;

        const ingredients = document.getElementById("ingredients").value;

        const instructions = document.getElementById("instructions").value;

        const image = document.getElementById("image").value;


        const message = 
        `New Recipe Submission.

        Your Name: ${yourName}

        Phone Number: ${phone}

        Recipe Name: ${recipeName}

        Description: ${description}

        Ingredients: ${ingredients}

        Instructions: ${instructions}

        Image URL: ${image}`;

        const phoneNumber = "2348143075874";

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL,"_blank");

        recipeForm.reset();
    });
};