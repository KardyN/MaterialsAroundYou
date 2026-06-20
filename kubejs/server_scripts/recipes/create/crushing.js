ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredients: [
        {
          item: "immersivepetroleum:petcoke",
        },
      ],
      processingTime: 100,
      results: [
        {
          count: 4,
          id: "kubejs:powder/petcoke",
        },
      ],
      id: "may:crushing/petcoke",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "create:crushing";
    event.custom(recipe).id(recipe.id);
  });
});
