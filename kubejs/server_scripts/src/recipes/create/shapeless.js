ServerEvents.recipes((event) => {
  const recipes = [
    {
      output: "create:andesite_alloy",
      inputs: ["2x create:andesite_alloy"],
      id: "create:shapeless/andesite_alloy",
    },
  ];

  recipes.forEach((recipe) => {
    event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  });
});
