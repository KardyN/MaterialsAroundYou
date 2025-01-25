ServerEvents.recipes((event) => {
  let recipes = [
    /*{
      ingredients: [
        {
          item: "create:rose_quartz",
        },
      ],
      results: [
        {
          item: "create:polished_rose_quartz",
        },
      ],
      id: "createa/sandpaper_polishing"
    },*/
  ];

  global.gemList.forEach((gem) => {
    recipes.push({
      ingredients: [
        {
          item: `tfc:ore/${gem}`,
        },
      ],
      results: [
        {
          item: `tfc:gem/${gem}`,
        },
      ],
      id: `create/sandpaper_polishing/${gem}`,
    });
  });

  recipes.forEach((recipe) => {
    recipe.type = "create:sandpaper_polishing";
    event.custom(recipe).id(recipe.id);
  });
});
