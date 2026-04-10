ServerEvents.recipes((event) => {
  let recipes = [
    {
      output: "immersiveengineering:ingot_hop_graphite",
      pattern: ["AAA", "AAA", "AAA"],
      key: {
        A: "immersiveengineering:dust_hop_graphite",
      },
      id: "may:shaped/ingot_hop_graphite",
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
