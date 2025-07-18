Sure! Here's a README file for your recipe app project:

---

# Recipe Manager App

A simple web-based Recipe Manager that allows users to add, edit, delete, search, and filter recipes by cuisine. Recipes are stored locally in the browser's `localStorage` for persistence.

## Features

* Add new recipes with title, ingredients, instructions, and cuisine type.
* Edit existing recipes.
* Delete recipes.
* Search recipes by title or ingredients.
* Filter recipes by cuisine.
* Data persistence using browser's `localStorage`.

## Usage

1. **Add Recipe:**

   * Fill in the form with the recipe title, ingredients (comma-separated), instructions, and cuisine.
   * Click "Submit" to add the recipe to the list.

2. **Edit Recipe:**

   * Click the "Edit" button next to a recipe.
   * The recipe details will populate the form.
   * Modify fields and click "Submit" to update.

3. **Delete Recipe:**

   * Click the "Delete" button next to a recipe to remove it.

4. **Search Recipes:**

   * Type in the search box to filter recipes by title or ingredients.

5. **Filter by Cuisine:**

   * Select a cuisine from the dropdown to filter recipes by cuisine type.

6. **Clear Form:**

   * Click the "Clear" button to reset the input form.

## Code Structure

# video









https://github.com/user-attachments/assets/6b438567-d1bb-47f4-9cf7-3ab479e9ca9f






* **Data Model & DOM References:**
  Variables are declared for recipes and form elements.

* **Persistence:**
  Recipes are saved and loaded from `localStorage`.

* **Event Listeners:**

  * Form submission to add/edit recipes.
  * Buttons for editing and deleting recipes.
  * Inputs for search and filter functionalities.

* **Functions:**

  * `saveAll()` saves the recipes to localStorage.
  * `resetForm()` clears the input form.
  * `displayRecipes()` updates the recipe list on the page based on filters.

## Requirements

* Modern browser with JavaScript enabled.
* No backend required (all data stored locally).

## Example HTML Structure


```

## License

MIT License

---

If you'd like, I can help you generate a full README.md file for download too!
