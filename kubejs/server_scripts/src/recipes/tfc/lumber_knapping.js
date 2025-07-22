ServerEvents.recipes((event) => {
  let recipes = [
    {
      pattern: ["     ", "  X  ", " XXX ", "  X  ", "     "],
      result: { item: "kubejs:wooden_gear", count: 1 },
      id: "may/lumber_knapping/wooden_gear_1",
    },
    {
      pattern: ["   X ", "  XXX", " X X ", "XXX  ", " X   "],
      result: { item: "kubejs:wooden_gear", count: 2 },
      id: "may/lumber_knapping/wooden_gear_2",
    },
    {
      pattern: ["X X X", " XXX ", "XX XX", " XXX ", "X X X"],
      result: { item: "kubejs:large_wooden_gear", count: 1 },
      id: "may/lumber_knapping/large_wooden_gear",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:knapping";
    recipe.knapping_type = "tfc:lumber";
    event.custom(recipe).id(recipe.id);
  });
});
