ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredients: [{ item: "minecraft:stick" }],
      fluid_ingredient: { fluid: "minecraft:water", amount: 1000 },
      duration: 40,
      temperature: 300,
      item_output: [{ id: "minecraft:stick" }],
      fluid_output: { id: "kubejs:boiled_water", amount: 1000 },
      id: "may:pot/boiled_water",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:pot";
    event.custom(recipe).id(recipe.id);
  });
});
