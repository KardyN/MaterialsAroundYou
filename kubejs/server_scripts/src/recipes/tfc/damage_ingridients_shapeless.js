ServerEvents.recipes((event) => {
  let recipes = [];

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

  recipes.forEach((recipe) => {
    recipe.type = "tfc:damage_inputs_shapeless_crafting";
    event.custom(recipe).id(recipe.id);
  });
});
