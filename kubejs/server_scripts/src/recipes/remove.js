//priority: 10
ServerEvents.recipes((event) => {
  const recipes = [
    { id: /heating\/ore/ },
    { id: /quern\/.+_.+$/ }, // ore
    { type: "immersiveengineering:crusher" },
    { type: "immersiveengineering:arc_furnace" },
    { type: "tfc:bloomery" },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
