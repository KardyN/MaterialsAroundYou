ServerEvents.recipes((event) => {
  let recipes = [
    {
      output: "immersiveengineering:basic_engineering",
      inputs: ["#immersiveengineering:treated_wood", "kubejs:light_frame"],
      id: "may:crafting/basic_engineering",
    },
  ];

  recipes.forEach((recipe) => {
    event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  });
});
