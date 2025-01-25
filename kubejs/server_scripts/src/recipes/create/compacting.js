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
          item: `kubejs:briquette/${powder.name}`,
        },
      ],
      id: `create:compacting/briquette/${powder.name}`,
    });
  });

  recipes.forEach((recipe) => {
    recipe.type = "create:compacting";
    event.custom(recipe).id(recipe.id);
  });
});
