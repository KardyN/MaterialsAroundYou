JEIEvents.removeCategories((event) => {
  //console.log(event.categoryIds);
  jei.categories.hide.forEach((hidden_category) => {
    event.remove(hidden_category);
  });
});
