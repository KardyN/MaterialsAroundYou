ServerEvents.recipes((event) => {
  let recipes = [
    {
      first_input: { item: "tfc:metal/ingot/weak_steel" },
      second_input: { item: "tfc:metal/ingot/steel" },
      tier: 4,
      result: { id: "tfc:metal/ingot/high_carbon_black_steel" },
      id: "may:welding/high_carbon_black_steel",
    },
    {
      first_input: { item: "tfc:metal/ingot/weak_blue_steel" },
      second_input: { item: "tfc:metal/ingot/steel" },
      tier: 4,
      result: { id: "tfc:metal/ingot/high_carbon_blue_steel" },
      id: "may:welding/high_carbon_blue_steel",
    },
    {
      first_input: { item: "tfc:metal/ingot/weak_red_steel" },
      second_input: { item: "tfc:metal/ingot/steel" },
      tier: 4,
      result: { id: "tfc:metal/ingot/high_carbon_red_steel" },
      id: "may:welding/high_carbon_red_steel",
    },
    {
      first_input: { item: "tfc:metal/ingot/steel" },
      second_input: { item: "tfc:metal/sheet/steel" },
      tier: 4,
      result: { id: "railways:track_incomplete_monorail" },
      id: "may:welding/track_incomplete_monorail",
    },
    {
      first_input: { item: "railways:track_incomplete_monorail" },
      second_input: { item: "tfc:metal/sheet/steel" },
      tier: 4,
      result: { id: "railways:track_monorail" },
      id: "may:welding/track_monorail",
    },
    {
      first_input: { item: "kubejs:metal/knife_head/osmirite" },
      second_input: { item: "kubejs:metal/knife_head/osmirite" },
      tier: 5,
      result: { id: "kubejs:metal/shears/osmirite" },
      id: "may:welding/metal/shears/osmirite",
    },
    {
      type: "tfc:welding",
      first_input: { tag: "c:ingots/osmirite" },
      result: { id: "kubejs:metal/double_ingot/osmirite" },
      second_input: { tag: "c:ingots/osmirite" },
      tier: 5,
      id: "may:welding/metal/double_ingot/osmirite",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:welding";
    event.custom(recipe).id(recipe.id);
  });
});
