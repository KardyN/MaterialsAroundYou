ServerEvents.recipes((event) => {
  let recipes = [
    {
      first_input: { item: "tfc:metal/ingot/weak_steel" },
      second_input: { item: "tfc:metal/ingot/steel" },
      tier: 4,
      result: { item: "tfc:metal/ingot/high_carbon_black_steel" },
      id: "may:welding/high_carbon_black_steel",
    },
    {
      first_input: { item: "tfc:metal/ingot/weak_blue_steel" },
      second_input: { item: "tfc:metal/ingot/steel" },
      tier: 4,
      result: { item: "tfc:metal/ingot/high_carbon_blue_steel" },
      id: "may:welding/high_carbon_blue_steel",
    },
    {
      first_input: { item: "tfc:metal/ingot/weak_red_steel" },
      second_input: { item: "tfc:metal/ingot/steel" },
      tier: 4,
      result: { item: "tfc:metal/ingot/high_carbon_red_steel" },
      id: "may:welding/high_carbon_red_steel",
    },
    {
      first_input: { item: "tfc:metal/ingot/steel" },
      second_input: { item: "tfc:metal/sheet/steel" },
      tier: 4,
      result: { item: "railways:track_incomplete_monorail" },
      id: "may:welding/track_incomplete_monorail",
    },
    {
      first_input: { item: "railways:track_incomplete_monorail" },
      second_input: { item: "tfc:metal/sheet/steel" },
      tier: 4,
      result: { item: "railways:track_monorail" },
      id: "may:welding/track_monorail",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:welding";
    event.custom(recipe).id(recipe.id);
  });
});
