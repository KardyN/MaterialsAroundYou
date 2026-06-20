ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredient: {
        item: "tfc:ore/cryolite",
      },
      result: {
        id: "kubejs:powder/cryolite",
        count: 4,
      },
      id: "may:quern/cryolite",
    },
  ];

  global.gemList.forEach((gem) => {
    recipes.push(
      {
        ingredient: {
          item: `tfc:ore/${gem}`,
        },
        result: {
          id: `tfc:powder/${gem}`,
          count: 1,
        },
        id: `may:quern/${gem}_powder`,
      },
      {
        ingredient: {
          item: `tfc:gem/${gem}`,
        },
        result: {
          id: `tfc:powder/${gem}`,
          count: 1,
        },
        id: `may:quern/cut_${gem}_powder`,
      }
    );
  });

  global.oreList.forEach((ore) => {
    recipes.push({
      ingredient: {
        item: `${ore.mod}:ore/small_${ore.name}`,
      },
      result: {
        id: `kubejs:dirty_dust/${ore.name}`,
        count: 1,
      },
      id: `may:quern/${ore.name}`,
    });
  });

  recipes.forEach((recipe) => {
    recipe.type = "tfc:quern";
    event.custom(recipe).id(recipe.id);
  });
});
