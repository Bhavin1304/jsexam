// Data model and DOM refs
let recipes = [];
const form = document.getElementById('recipe-form'),
      listEl = document.getElementById('recipe-list'),
      titleIn = document.getElementById('recipe-title'),
      ingrIn = document.getElementById('recipe-ingredients'),
      instrIn = document.getElementById('recipe-instructions'),
      cuisineIn = document.getElementById('recipe-cuisine'),
      idIn = document.getElementById('recipe-id'),
      clearBtn = document.getElementById('form-clear'),
      searchIn = document.getElementById('search-query'),
      filterIn = document.getElementById('filter-cuisine');

// Load on startup
window.addEventListener('DOMContentLoaded', () => {
  const data = localStorage.getItem('recipes');
  recipes = data ? JSON.parse(data) : [];
  displayRecipes();
});

// Utility to save
function saveAll(){
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Add or edit recipe
form.addEventListener('submit', e=>{
  e.preventDefault();
  const title = titleIn.value.trim();
  const ingr = ingrIn.value.split(',').map(s => s.trim()).filter(Boolean);
  if(!title || ingr.length===0){
    alert('Title & ingredients are required'); 
    return;
  }
  const recipeObj = {
    id: idIn.value || Date.now().toString(),
    title, ingredients: ingr,
    instructions: instrIn.value.trim(),
    cuisine: cuisineIn.value
  };
  const idx = recipes.findIndex(r=>r.id === recipeObj.id);
  if(idx >= 0) recipes[idx] = recipeObj;
  else recipes.push(recipeObj);

  saveAll(); resetForm(); displayRecipes();
});

// Clear form
clearBtn.addEventListener('click', resetForm);
function resetForm(){
  form.reset(); idIn.value = '';
}

// Display recipes
function displayRecipes(){
  listEl.innerHTML = '';
  let filtered = recipes.filter(r=>{
    const q = searchIn.value.toLowerCase();
    let match = true;
    if(q) match = r.title.toLowerCase().includes(q) || r.ingredients.some(i=>i.toLowerCase().includes(q));
    if(filterIn.value) match = match && r.cuisine === filterIn.value;
    return match;
  });
  filtered.forEach(r=>{
    const div = document.createElement('div');
    div.className = 'recipe';
    div.innerHTML = 
      `<h3>${r.title}</h3>
       <p><strong>Cuisine:</strong> ${r.cuisine}</p>
       <p><strong>Ingredients:</strong><br>${r.ingredients.join(', ')}</p>
       <p><strong>Instructions:</strong><br>${r.instructions}</p>
       <div class="controls">
         <button data-id="${r.id}" class="edit-btn">Edit</button>
         <button data-id="${r.id}" class="del-btn">Delete</button>
       </div>`;
    listEl.appendChild(div);
  });
}

// Edit and Delete handlers
listEl.addEventListener('click', e => {
  if(e.target.classList.contains('del-btn')){
    const id = e.target.dataset.id;
    recipes = recipes.filter(r => r.id !== id);
    saveAll(); displayRecipes();
  }
  if(e.target.classList.contains('edit-btn')){
    const id = e.target.dataset.id;
    const r = recipes.find(r => r.id === id);
    idIn.value = r.id;
    titleIn.value = r.title;
    ingrIn.value = r.ingredients.join(', ');
    instrIn.value = r.instructions;
    cuisineIn.value = r.cuisine;
  }
});

// Search & filter
searchIn.addEventListener('input', displayRecipes);
filterIn.addEventListener('change', displayRecipes);
