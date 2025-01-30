ServerEvents.recipes((event) => {
  let recipes = [
    {
      knapping_type: "tfc:lumber",
      pattern: ["     ", "  X  ", " XXX ", "  X  ", "     "],
      result: { item: "kubejs:wooden_gear", count: 1 },
      id: "tfc/lumber_knapping/wooden_gear_1",
    },
    {
      knapping_type: "tfc:lumber",
      pattern: ["   X ", "  XXX", " X X ", "XXX  ", " X   "],
      result: { item: "kubejs:wooden_gear", count: 2 },
      id: "tfc/lumber_knapping/wooden_gear_2",
    },
    {
      knapping_type: "tfc:lumber",
      pattern: ["X X X", " XXX ", "XX XX", " XXX ", "X X X"],
      result: { item: "kubejs:large_wooden_gear", count: 1 },
      id: "tfc/lumber_knapping/large_wooden_gear",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:knapping";
    event.custom(recipe).id(recipe.id);
  });
});
