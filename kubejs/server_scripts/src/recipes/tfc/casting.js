ServerEvents.recipes((event) => {
  let recipes = [
    {
      mold: { item: "tfc:ceramic/ingot_mold" },
      fluid: { ingredient: "kubejs:metal/bearing_alloy", amount: 50 },
      result: { item: "create:andesite_alloy" },
      break_chance: 0.1,
      id: "may:casting/bearing_alloy_ingot",
    },
    {
      mold: { item: "tfc:ceramic/fire_ingot_mold" },
      fluid: { ingredient: "kubejs:metal/bearing_alloy", amount: 50 },
      result: { item: "create:andesite_alloy" },
      break_chance: 0.01,
      id: "may:casting/bearing_alloy_fire_ingot",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:casting";
    event.custom(recipe).id(recipe.id);
  });
});
