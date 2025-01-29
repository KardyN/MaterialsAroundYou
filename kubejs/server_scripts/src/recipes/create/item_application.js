ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredients: [
        {
          tag: "tfc:axles",
        },
        {
          item: "create:andesite_alloy",
        },
      ],
      results: [
        {
          item: "create:shaft",
        },
      ],
      id: "create:item_application/shaft",
    },
    {
      ingredients: [
        {
          item: "create:shaft",
        },
        {
          item: "kubejs:wooden_gear",
        },
      ],
      results: [
        {
          item: "create:cogwheel",
        },
      ],
      id: "create:item_application/gear",
    },
    {
      ingredients: [
        {
          item: "create:shaft",
        },
        {
          item: "kubejs:large_wooden_gear",
        },
      ],
      results: [
        {
          item: "create:large_cogwheel",
        },
      ],
      id: "create:item_application/large_gear",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "create:item_application";
    event.custom(recipe).id(recipe.id);
  });
});
