const form = document.getElementById('recipeForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  formData.append('name', document.getElementById('name').value);
  formData.append('ingredients', document.getElementById('ingredients').value);
  formData.append('directions', document.getElementById('directions').value);
  formData.append('image', document.getElementById('image').files[0]);

  fetch('/api/recipes', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => alert('Recipe added!'))
  .catch(error => console.error('Error:', error));
});
