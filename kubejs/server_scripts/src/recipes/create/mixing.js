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
          amount: 250,
          fluid: "afc:latex",
          nbt: {},
        },
      ],
      results: [
        {
          item: "afc:rubber_bar",
        },
      ],
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "create:mixing";
    event.custom(recipe).id(recipe.id);
  });
});
