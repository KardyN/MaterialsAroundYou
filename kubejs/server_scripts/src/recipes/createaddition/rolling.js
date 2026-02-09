ServerEvents.recipes((event) => {
  let recipes = [
    {
      input: {
        tag: "forge:ingots/copper",
      },
      result: {
        item: "createaddition:copper_rod",
        count: 2,
      },
      id: "may:rolling/copper_ingot",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "createaddition:rolling";
    event.custom(recipe).id(recipe.id);
  });
});
