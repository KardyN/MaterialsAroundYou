ServerEvents.recipes((event) => {
  let recipe_data_list = [
    {
      ingredients: [{ item: "tfc:ore/cryolite" }],
      result: "kubejs:powder/cryolite",
      count: 4,
      id: "may:milling/cryolite",
    },
    {
      ingredients: [{ item: "tfc:ore/sulfur" }],
      result: "tfc:powder/sulfur",
      count: 4,
      id: "may:milling/sulfur",
    },
    {
      ingredients: [{ tag: "c:dead_coral_block" }],
      result: "coralstfc:coral_powder",
      count: 4,
      id: "may:milling/coral_block",
    },
    {
      ingredients: [{ tag: "c:dead_coral" }],
      result: "coralstfc:coral_powder",
      count: 2,
      id: "may:milling/coral",
    },
    {
      ingredients: [{ item: "tfc:ore/halite" }],
      result: "tfc:powder/salt",
      count: 4,
      id: "may:milling/halite",
    },
    {
      ingredients: [{ item: "tfc:food/olive" }],
      result: "tfc:olive_paste",
      count: 2,
      id: "may:milling/olive",
    },
    {
      ingredients: [{ item: "tfc:rock/raw/limestone" }],
      result: "tfc:ore/gypsum",
      count: 1,
      id: "may:milling/limestone",
    },
    {
      ingredients: [{ item: "firmalife:food/dehydrated_soybeans" }],
      result: "firmalife:food/soybean_paste",
      count: 1,
      id: "may:milling/dehydrated_soybeans",
    },
    {
      ingredients: [{ item: "firmalife:food/nixtamal" }],
      result: "firmalife:food/masa_flour",
      count: 4,
      id: "may:milling/nixtamal",
    },
    {
      ingredients: [{ item: "tfc:ore/sylvite" }],
      result: "tfc:powder/sylvite",
      count: 4,
      id: "may:milling/sylvite",
    },
    {
      ingredients: [{ item: "tfc:ore/cinnabar" }],
      result: "minecraft:redstone",
      count: 4,
      id: "may:milling/cinnabar",
    },
    {
      ingredients: [{ item: "firmalife:food/red_grapes" }],
      result: "firmalife:food/smashed_red_grapes",
      count: 1,
      id: "may:milling/red_grapes",
    },
    {
      ingredients: [{ item: "firmalife:food/white_grapes" }],
      result: "firmalife:food/smashed_white_grapes",
      count: 1,
      id: "may:milling/white_grapes",
    },
    {
      ingredients: [{ item: "minecraft:charcoal" }],
      result: "tfc:powder/charcoal",
      count: 4,
      id: "may:milling/charcoal",
    },
    {
      ingredients: [{ item: "tfc:ore/borax" }],
      result: "tfc:powder/flux",
      count: 6,
      id: "may:milling/borax",
    },
    {
      ingredients: [{ item: "tfc:ore/graphite" }],
      result: "tfc:powder/graphite",
      count: 4,
      id: "may:milling/graphite",
    },
    {
      ingredients: [{ item: "tfc:ore/saltpeter" }],
      result: "tfc:powder/saltpeter",
      count: 4,
      id: "may:milling/saltpeter",
    },
    {
      ingredients: [{ item: "minecraft:bone_block" }],
      result: "minecraft:bone_meal",
      count: 9,
      id: "may:milling/bone_block",
    },
    {
      ingredients: [{ item: "minecraft:bone" }],
      result: "minecraft:bone_meal",
      count: 3,
      id: "may:milling/bone",
    },
    {
      ingredients: [{ tag: "tfc:fluxstone" }],
      result: "tfc:powder/flux",
      count: 2,
      id: "may:milling/fluxstone",
    },
  ];

  let recipes = [
    {
      ingredients: [{ item: "immersivepetroleum:petcoke" }],
      processing_time: 100,
      results: [{ count: 4, id: "kubejs:powder/petcoke" }],
      id: "may:milling/petcoke",
    },
  ];

  recipe_data_list.forEach((recipe_data) => {
    recipes.push({
      ingredients: recipe_data.ingredients,
      processing_time: 50,
      results: [
        {
          count: recipe_data.count,
          id: recipe_data.result,
        },
      ],
      id: recipe_data.id,
    });
  });

  global.colorsList.forEach((color) => {
    !/(gray)|(black)|(cyan)/.exec(color) &&
      recipes.push({
        ingredients: [
          {
            tag: `may:makes_${color}_dye`,
          },
        ],
        processing_time: 50,
        results: [
          {
            count: 2,
            id: `minecraft:${color}_dye`,
          },
        ],
        id: `may:milling/${color}_dye`,
      });
  });

  global.floursList.forEach((flour) => {
    recipes.push({
      ingredients: [
        {
          item: `tfc:food/${flour}_grain`,
        },
      ],
      processing_time: 50,
      results: [
        {
          count: 1,
          id: `tfc:food/${flour}_flour`,
        },
      ],
      id: `may:milling/${flour}_grain`,
    });
  });

  global.gemList.forEach((gem) => {
    recipes.push(
      {
        ingredients: [
          {
            item: `tfc:ore/${gem}`,
          },
        ],
        processing_time: 50,
        results: [
          {
            count: 1,
            id: `tfc:powder/${gem}`,
          },
        ],
        id: `may:milling/${gem}_powder`,
      },
      {
        ingredients: [
          {
            item: `tfc:gem/${gem}`,
          },
        ],
        results: [
          {
            count: 1,
            id: `tfc:powder/${gem}`,
          },
        ],
        id: `may:milling/cut_${gem}_powder`,
      }
    );
  });

  global.oreList.forEach((ore) => {
    recipes.push({
      ingredients: [
        {
          item: `${ore.mod}:ore/small_${ore.name}`,
        },
      ],
      results: [
        {
          count: 1,
          id: `kubejs:dirty_dust/${ore.name}`,
        },
      ],
      id: `may:milling/${ore.name}`,
    });
  });

  recipes.forEach((recipe) => {
    recipe.type = "create:milling";
    event.custom(recipe).id(recipe.id);
  });
});
