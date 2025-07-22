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
          item: "create:cogwheel",
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
          item: "create:large_cogwheel",
        },
      ],
      id: "may:item_application/large_gear",
    },
    {
      ingredients: [
        {
          item: "minecraft:cauldron",
        },
        {
          item: "create:andesite_alloy",
        },
      ],
      results: [
        {
          item: "create:basin",
        },
      ],
      id: "may:item_application/basin",
    },
    {
      ingredients: [
        {
          item: "minecraft:andesite_casing",
        },
        {
          item: "create:turntable",
        },
      ],
      results: [
        {
          item: "create:depot",
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
