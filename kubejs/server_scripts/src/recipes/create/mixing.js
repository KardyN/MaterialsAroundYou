ServerEvents.recipes((event) => {
  let recipes = [
    {
      id: "may:mixing/resin",
      heatRequirement: "heated",
      ingredients: [
        {
          tag: "forge:dusts/sulfur",
        },
        {
          amount: 1000,
          fluid: "afc:latex",
          nbt: {},
        },
      ],
      results: [
        {
          item: "create:belt_connector",
        },
      ],
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "create:mixing";
    event.custom(recipe).id(recipe.id);
  });
});
