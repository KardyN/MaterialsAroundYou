ServerEvents.recipes((event) => {
  const recipes = [
    {
      output: "create:andesite_alloy",
      pattern: ["ABA", "BCB", "ABA"],
      key: {
        A: "create:andesite_alloy",
        B: "create:andesite_alloy",
        C: "create:andesite_alloy",
      },
      id: "create:shaped/andesite_alloy",
    },
  ];

  recipes.forEach((recipe) => {
    //event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
