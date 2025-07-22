ServerEvents.recipes((event) => {
  let recipes = [
    {
      recipe: {
        type: "minecraft:crafting_shapeless",
        ingredients: [{ tag: "tfc:lumber" }, { tag: "tfc:saws" }],
        result: { item: "tfc:wattle", count: 1 },
      },
      id: "may:shapeless/wattle",
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
        id: `may:shapeless/ore/${smallOre.quality}_to_small_${ore.name}`,
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
      id: `may:shapeless/briquette_to_pile/${powder.name}`,
    });
  });

  global.woodList.forEach((wood) => {
    recipes.push(
      {
        recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [
            { item: wood.splice(4, "wood/support/") },
            { item: "tfc:glue" },
            { item: "create:sand_paper" },
          ],
          result: { item: wood.splice(4, "wood/axle/") },
        },
        id: "may:shapeless/axle/" + wood.slice(4),
      },
      {
        recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [
            { item: wood.splice(4, "wood/axle/") },
            { tag: "tfc:hammers" },
            { tag: "tfc:pileable_ingots" },
          ],
          result: { item: wood.splice(4, "wood/bladed_axle/") },
        },
        id: "may:shapeless/bladed_axle/" + wood.slice(4),
      },
      {
        recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [{ tag: wood + "_logs" }, { tag: "tfc:saws" }],
          result: { item: wood.splice(4, "wood/support/"), count: 4 },
        },
        id: "may:shapeless/support/" + wood.slice(4),
      },
      {
        recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [
            { item: wood.splice(4, "wood/axle/") },
            { tag: "tfc:chisels" },
            { item: wood.splice(4, "wood/stripped_log/") },
          ],
          result: { item: wood.splice(4, "wood/encased_axle/") },
        },
        id: "may:shapeless/encased_axle/" + wood.slice(4),
      },
      {
        recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [
            { item: wood.splice(4, "wood/support/") },
            { tag: "tfc:saws" },
          ],
          result: { item: wood.splice(4, "wood/lumber/"), count: 4 },
        },
        id: "may:shapeless/lumber/" + wood.slice(4),
      }
    );
  });

  recipes.forEach((recipe) => {
    recipe.type = "tfc:damage_inputs_shapeless_crafting";
    event.custom(recipe).id(recipe.id);
  });
});
