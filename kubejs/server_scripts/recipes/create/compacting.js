ServerEvents.recipes((event) => {
  let recipes = [];

  global.powderList.forEach((powder) => {
    recipes.push({
      ingredients: [
        {
          item: `kubejs:pile/${powder.name}`,
        },
        {
          item: `kubejs:pile/${powder.name}`,
        },
        {
          item: `kubejs:pile/${powder.name}`,
        },
        {
          item: `kubejs:pile/${powder.name}`,
        },
        {
          item: `kubejs:pile/${powder.name}`,
        },
      ],
      results: [
        {
          id: `kubejs:briquette/${powder.name}`,
        },
      ],
      id: `may:compacting/briquette/${powder.name}`,
    });
  });

  recipes.forEach((recipe) => {
    recipe.type = "create:compacting";
    event.custom(recipe).id(recipe.id);
  });
});
