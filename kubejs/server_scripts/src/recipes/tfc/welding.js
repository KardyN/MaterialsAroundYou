ServerEvents.recipes((event) => {
  let recipes = [
    {
      first_input: { item: "tfc:metal/ingot/weak_steel" },
      second_input: { item: "tfc:metal/ingot/steel" },
      tier: 3,
      result: { item: "tfc:metal/ingot/high_carbon_black_steel" },
      id: "tfc:welding/high_carbon_black_steel",
    },
    {
      first_input: { item: "tfc:metal/ingot/weak_blue_steel" },
      second_input: { item: "tfc:metal/ingot/steel" },
      tier: 3,
      result: { item: "tfc:metal/ingot/high_carbon_blue_steel" },
      id: "tfc:welding/high_carbon_blue_steel",
    },
    {
      first_input: { item: "tfc:metal/ingot/weak_red_steel" },
      second_input: { item: "tfc:metal/ingot/steel" },
      tier: 3,
      result: { item: "tfc:metal/ingot/high_carbon_red_steel" },
      id: "tfc:welding/high_carbon_red_steel",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:welding";
    event.custom(recipe).id(recipe.id);
  });
});
