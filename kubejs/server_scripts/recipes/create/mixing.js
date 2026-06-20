ServerEvents.recipes((event) => {
  let recipes = [
    {
      id: "may:mixing/resin",
      heat_requirement: "heated",
      ingredients: [
        {
          tag: "c:dusts/sulfur",
        },
        {
          type: "neoforge:single",
          amount: 250,
          fluid: "afc:latex",
        },
      ],
      results: [
        {
          id: "afc:rubber_bar",
        },
      ],
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "create:mixing";
    event.custom(recipe).id(recipe.id);
  });
});
