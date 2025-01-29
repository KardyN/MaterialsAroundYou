ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredient: { item: "create:andesite_alloy" },
      result_fluid: { fluid: "kubejs:metal/bearing_alloy", amount: 50 },
      temperature: 460,
      id: "tfc:heating/andesite_alloy",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:heating";
    event.custom(recipe).id(recipe.id);
  });
});
