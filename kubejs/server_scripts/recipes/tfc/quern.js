ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredient: {
        item: "tfc:ore/cryolite",
      },
      result: {
        id: "kubejs:powder/cryolite",
        count: 3,
      },
      id: "may:quern/cryolite",
    },
    {
      ingredient: {
        item: "immersivepetroleum:petcoke",
      },
      result: {
        id: "kubejs:powder/petcoke",
        count: 3,
      },
      id: "may:quern/petcoke",
    },
    {
      ingredient: {
        item: "minecraft:charcoal",
      },
      result: {
        id: "tfc:powder/charcoal",
        count: 3,
      },
      id: "may:quern/charcoal",
    },
    {
      ingredient: {
        item: "tfc:ore/sylvite",
      },
      result: {
        id: "tfc:powder/sylvite",
        count: 3,
      },
      id: "may:quern/sylvite",
    },
    {
      ingredient: {
        item: "tfc:ore/halite",
      },
      result: {
        id: "tfc:powder/salt",
        count: 3,
      },
      id: "may:quern/salt",
    },
    {
      ingredient: {
        item: "tfc:ore/sulfur",
      },
      result: {
        id: "tfc:powder/sulfur",
        count: 3,
      },
      id: "may:quern/sulfur",
    },
    {
      ingredient: {
        item: "tfc:ore/saltpeter",
      },
      result: {
        id: "tfc:powder/saltpeter",
        count: 3,
      },
      id: "may:quern/saltpeter",
    },
    {
      ingredient: {
        item: "tfc:ore/borax",
      },
      result: {
        id: "tfc:powder/flux",
        count: 4,
      },
      id: "may:quern/flux_from_borax",
    },
    {
      ingredient: {
        item: "tfc:ore/graphite",
      },
      result: {
        id: "tfc:powder/graphite",
        count: 3,
      },
      id: "may:quern/graphite",
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
    ore.name != "cinnabar" &&
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
