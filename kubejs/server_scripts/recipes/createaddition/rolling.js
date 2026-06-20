ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredients: [
        {
          tag: "c:ingots/copper",
        },
      ],
      results: [
        {
          id: "createaddition:copper_rod",
          count: 2,
        },
      ],
      id: "may:rolling/copper_ingot",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "createaddition:rolling";
    event.custom(recipe).id(recipe.id);
  });
});
