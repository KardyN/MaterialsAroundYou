ServerEvents.recipes((event) => {
  let recipes = [
    {
      energy: 4800,
      input: {
        base_ingredient: { tag: "forge:ingots/hop_graphite" },
        count: 1,
      },
      mold: "immersiveengineering:mold_rod",
      result: {
        item: "immersiveengineering:graphite_electrode",
      },
      id: "may:emtalpress/graphite_electrode",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "immersiveengineering:metal_press";
    event.custom(recipe).id(recipe.id);
  });
});
