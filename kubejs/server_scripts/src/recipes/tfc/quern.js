ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredient: {
        item: "tfc:ore/cryolite",
      },
      result: {
        item: "kubejs:powder/cryolite",
        count: 4,
      },
      id: "tfc:quern/cryolite",
    },
  ];

  global.gemList.forEach((gem) => {
    recipes.push({
      ingredient: {
        item: `tfc:ore/${gem}`,
      },
      result: {
        item: `tfc:powder/${gem}`,
        count: 1,
      },
      id: `tfc:quern/${gem}`,
    });
  });

  global.oreList.forEach((ore) => {
    recipes.push({
      ingredient: {
        item: `${ore.mod}:ore/small_${ore.name}`,
      },
      result: {
        item: `kubejs:dirty_dust/${ore.name}`,
        count: 1,
      },
      id: `tfc:quern/${ore.name}`,
    });
  });

  recipes.forEach((recipe) => {
    recipe.type = "tfc:quern";
    event.custom(recipe).id(recipe.id);
  });
});
