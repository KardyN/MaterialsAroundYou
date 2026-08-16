ServerEvents.recipes((event) => {
  let recipes = [
    {
      knapping_type: "tfc:lumber",
      pattern: ["   X ", "  XXX", " X X ", "XXX  ", " X   "],
      result: { id: "kubejs:wooden_gear", count: 2 },
      id: "may/lumber_knapping/wooden_gear",
    },
    {
      knapping_type: "tfc:lumber",
      pattern: ["X X X", " XXX ", "XX XX", " XXX ", "X X X"],
      result: { id: "kubejs:large_wooden_gear", count: 1 },
      id: "may/lumber_knapping/large_wooden_gear",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:knapping";
    event.custom(recipe).id(recipe.id);
  });
});
