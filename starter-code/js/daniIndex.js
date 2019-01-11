

        function ingredientsListGeneration(nItems) {
            var newRecipe = document.createElement("ul");
            document.querySelector("body").appendChild(newRecipe);
            var newIngredient
            for (var i = 0; i < nItems; i++) {
                newIngredient = document.createElement("li");
                newIngredient.innerHTML = "ingredient " + (i + 1)
                document.querySelector("ul").appendChild(newIngredient);
            }
        }
        ingredientsListGeneration(Math.floor(Math.random() * 100))
