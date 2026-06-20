ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredients: [
        {
          tag: "may:axles",
        },
        {
          item: "create:andesite_alloy",
        },
      ],
      results: [
        {
          id: "create:shaft",
        },
      ],
      id: "may:item_application/shaft",
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
          id: "create:cogwheel",
        },
      ],
      id: "may:item_application/gear",
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
          id: "create:large_cogwheel",
        },
      ],
      id: "may:item_application/large_gear",
    },
    {
      ingredients: [
        {
          item: "create:andesite_casing",
        },
        {
          item: "create:turntable",
        },
      ],
      results: [
        {
          id: "create:depot",
        },
      ],
      id: "may:item_application/depot",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "create:item_application";
    event.custom(recipe).id(recipe.id);
  });
});
