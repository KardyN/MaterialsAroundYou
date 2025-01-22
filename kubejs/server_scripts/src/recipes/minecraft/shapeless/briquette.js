ServerEvents.recipes((event) => {
  global.powderList.forEach((powder) => {
    event.custom({
      type: "create:compacting",
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
    });
  });
});
