//priority: 10
ServerEvents.recipes((event) => {
  const recipes = [
    { type: "immersiveengineering:crusher" },
    { type: "immersiveengineering:arc_furnace" },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
