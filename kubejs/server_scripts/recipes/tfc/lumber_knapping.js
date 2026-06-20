ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredient: { tag: "tfc:lumber_knapping" },
      pattern: ["   X ", "  XXX", " X X ", "XXX  ", " X   "],
      result: { id: "kubejs:wooden_gear", count: 2 },
      id: "may/lumber_knapping/wooden_gear_2",
    },
    {
      ingredient: { tag: "tfc:lumber_knapping" },
      pattern: ["X X X", " XXX ", "XX XX", " XXX ", "X X X"],
      result: { id: "kubejs:large_wooden_gear", count: 1 },
      id: "may/lumber_knapping/large_wooden_gear",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:knapping";
    recipe.knapping_type = "tfc:lumber";
    event.custom(recipe).id(recipe.id);
  });
});
