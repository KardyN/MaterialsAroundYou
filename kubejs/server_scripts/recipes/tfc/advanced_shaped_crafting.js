ServerEvents.recipes((event) => {
  let recipes = [
    {
      pattern: ["AAA", "ABA", "AAA"],
      key: {
        A: { tag: "c:rods/steel" },
        B: { tag: "c:tools/hammer" },
      },
      input_column: 2,
      remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
      result: { id: "kubejs:light_frame" },
      id: "may:advanced_shaped/light_frame",
    },
    {
      pattern: ["AAA", "ABA", "AAA"],
      key: {
        A: { tag: "c:rods/black_steel" },
        B: { tag: "c:tools/hammer" },
      },
      input_column: 2,
      remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
      result: { id: "kubejs:heavy_frame" },
      id: "may:advanced_shaped/heavy_frame",
    },
    {
      pattern: ["AAA", "ABA", "AAA"],
      key: {
        A: { tag: "c:rods/stainless_steel" },
        B: { tag: "c:tools/hammer" },
      },
      input_column: 2,
      remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
      result: { id: "kubejs:chemical_frame" },
      id: "may:advanced_shaped/chemical_frame",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:advanced_shaped_crafting";
    event.custom(recipe).id(recipe.id);
  });
});
