ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredients: [{ tag: "tfc:lumber" }, { tag: "c:tools/saw" }],
      primary_ingredient: { tag: "c:tools/saw" },
      remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
      result: { id: "tfc:wattle", count: 1 },
      id: "may:shapeless/wattle",
    },
    {
      ingredients: [{ item: "tfc:wool" }, { tag: "may:spindle" }],
      primary_ingredient: { tag: "may:spindle" },
      remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
      result: { id: "tfc:wool_yarn", count: 8 },
      id: "may:shapeless/wool_yarn",
    },
    {
      ingredients: [
        { item: "firmalife:pineapple_fiber" },
        { tag: "may:spindle" },
      ],
      primary_ingredient: { tag: "may:spindle" },
      remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
      result: { id: "firmalife:pineapple_yarn", count: 8 },
      id: "may:shapeless/pineapple_yarn",
    },
  ];

  global.sheetmetalList.forEach((metal) => {
    recipes.push({
      ingredients: [
        {
          item:
            metal.name == "iron"
              ? "tfc:metal/double_sheet/wrought_iron"
              : `${metal.mod}:metal/double_sheet/${metal.name}`,
        },
        { tag: "c:tools/hammer" },
      ],
      primary_ingredient: { tag: "c:tools/hammer" },
      remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
      result: { id: `immersiveengineering:sheetmetal_${metal.name}` },
      id: `may:shapeless/sheetmetal_${metal.name}`,
    });
  });

  global.oreList.forEach((ore) => {
    ore.name != "cinnabar" &&
      global.smallOreYield.forEach((smallOre) => {
        recipes.push({
          ingredients: [
            { item: `${ore.mod}:ore/${smallOre.quality}_${ore.name}` },
            { tag: "c:tools/hammer" },
          ],
          primary_ingredient: { tag: "c:tools/hammer" },
          remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
          result: {
            id: `${ore.mod}:ore/small_${ore.name}`,
            count: smallOre.amount,
          },
          id: `may:shapeless/ore/${smallOre.quality}_to_small_${ore.name}`,
        });
      });
  });

  global.powderList.forEach((powder) => {
    recipes.push({
      ingredients: [
        { item: `kubejs:briquette/${powder.name}` },
        { tag: "c:tools/hammer" },
      ],
      primary_ingredient: { tag: "c:tools/hammer" },
      remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
      result: { id: `kubejs:pile/${powder.name}`, count: 5 },
      id: `may:shapeless/briquette_to_pile/${powder.name}`,
    });
  });

  global.woodList.forEach((wood) => {
    recipes.push(
      {
        ingredients: [
          { item: wood.splice(4, "wood/support/") },
          { item: "tfc:glue" },
          { item: "create:sand_paper" },
        ],
        primary_ingredient: { item: "create:sand_paper" },
        remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
        result: { id: wood.splice(4, "wood/axle/") },
        id: "may:shapeless/axle/" + wood.slice(4),
      },
      {
        ingredients: [
          { item: wood.splice(4, "wood/axle/") },
          { tag: "c:tools/hammer" },
          { item: "tfc:metal/ingot/cast_iron" },
        ],
        primary_ingredient: { tag: "c:tools/hammer" },
        remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
        result: { id: wood.splice(4, "wood/bladed_axle/") },
        id: "may:shapeless/bladed_axle/" + wood.slice(4),
      },
      {
        ingredients: [{ tag: wood + "_logs" }, { tag: "c:tools/saw" }],
        primary_ingredient: { tag: "c:tools/saw" },
        remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
        result: { id: wood.splice(4, "wood/support/"), count: 4 },
        id: "may:shapeless/support/" + wood.slice(4),
      },
      {
        ingredients: [
          { item: wood.splice(4, "wood/axle/") },
          { tag: "c:tools/chisel" },
          { item: wood.splice(4, "wood/stripped_log/") },
        ],
        primary_ingredient: { tag: "c:tools/chisel" },
        remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
        result: { id: wood.splice(4, "wood/encased_axle/") },
        id: "may:shapeless/encased_axle/" + wood.slice(4),
      },
      {
        ingredients: [
          { item: wood.splice(4, "wood/support/") },
          { tag: "c:tools/saw" },
        ],
        primary_ingredient: { tag: "c:tools/saw" },
        remainder: { modifiers: [{ type: "tfc:damage_crafting_remainder" }] },
        result: { id: wood.splice(4, "wood/lumber/"), count: 4 },
        id: "may:shapeless/lumber/" + wood.slice(4),
      }
    );
  });

  recipes.forEach((recipe) => {
    recipe.type = "tfc:advanced_shapeless_crafting";
    event.custom(recipe).id(recipe.id);
  });
});
