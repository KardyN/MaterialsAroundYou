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
          id: "create:polished_rose_quartz",
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
          id: `tfc:gem/${gem}`,
        },
      ],
      id: `may/sandpaper_polishing/${gem}`,
    });
  });

  recipes.forEach((recipe) => {
    recipe.type = "create:sandpaper_polishing";
    event.custom(recipe).id(recipe.id);
  });
});
