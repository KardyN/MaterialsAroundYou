ServerEvents.recipes((event) => {
  let recipes = [
    {
      recipe: {
        type: "minecraft:crafting_shapeless",
        ingredients: [{ tag: "tfc:firepit_logs" }, { tag: "tfc:saws" }],
        result: { item: "tfc:wattle", count: 8 },
      },
      id: "tfc:shapeless/wattle",
    },
  ];

  global.oreList.forEach((ore) => {
    global.smallOreYield.forEach((smallOre) => {
      recipes.push({
        recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [
            { item: `${ore.mod}:ore/${smallOre.quality}_${ore.name}` },
            { tag: "tfc:hammers" },
          ],
          result: {
            item: `${ore.mod}:ore/small_${ore.name}`,
            count: smallOre.amount,
          },
        },
        id: `tfc:shapeless/ore/${smallOre.quality}_to_small_${ore.name}`,
      });
    });
  });

  global.powderList.forEach((powder) => {
    recipes.push({
      recipe: {
        type: "minecraft:crafting_shapeless",
        ingredients: [
          { item: `kubejs:briquette/${powder.name}` },
          { tag: "tfc:hammers" },
        ],
        result: { item: `kubejs:pile/${powder.name}`, count: 5 },
      },
      id: `tfc:shapeless/briquette_to_pile/${powder.name}`,
    });
  });

  global.woodList.forEach((wood) => {
    recipes.push(
      {
        recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [
            { item: `tfc:wood/support/${wood}` },
            { item: "tfc:glue" },
            { item: "create:sand_paper" },
          ],
          result: { item: `tfc:wood/axle/${wood}` },
        },
        id: `tfc:shapeless/axle/${wood}`,
      },
      {
        recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [
            { item: `tfc:wood/axle/${wood}` },
            { tag: "tfc:hammers" },
            { tag: "tfc:pileable_ingots" },
          ],
          result: { item: `tfc:wood/bladed_axle/${wood}` },
        },
        id: `tfc:shapeless/bladed_axle/${wood}`,
      },
      {
        recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [
            { item: `tfc:wood/stripped_log/${wood}` },
            { tag: "tfc:saws" },
          ],
          result: { item: `tfc:wood/support/${wood}`, count: 4 },
        },
        id: `tfc:shapeless/support/${wood}`,
      },
      {
        recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [
            { item: `tfc:wood/axle/${wood}` },
            { tag: "tfc:chisels" },
            { item: `tfc:wood/stripped_log/${wood}` },
          ],
          result: { item: `tfc:wood/encased_axle/${wood}` },
        },
        id: `tfc:shapeless/encased_axle/${wood}`,
      },
      {
        recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [
            { item: `tfc:wood/encased_axle/${wood}` },
            { item: "create:cogwheel", count: 2 },
          ],
          result: { item: `tfc:wood/clutch/${wood}` },
        },
        id: `tfc:shapeless/clutch/${wood}`,
      },
      {
        recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [
            { item: `tfc:wood/encased_axle/${wood}` },
            { item: "create:cogwheel", count: 4 },
          ],
          result: { item: `tfc:wood/gear_box/${wood}` },
        },
        id: `tfc:shapeless/gear_box/${wood}`,
      }
    );
  });

  recipes.forEach((recipe) => {
    recipe.type = "tfc:damage_inputs_shapeless_crafting";
    event.custom(recipe).id(recipe.id);
  });
});
