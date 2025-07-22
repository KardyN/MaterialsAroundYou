ServerEvents.recipes((event) => {
  let recipes = [
    {
      acceptMirrored: false,
      key: {
        A: {
          item: "tfc:metal/sheet/wrought_iron",
        },
        B: {
          tag: "minecraft:planks",
        },
        C: {
          item: "create:andesite_casing",
        },
        D: {
          tag: "tfc:lumber",
        },
      },
      pattern: [" AAA ", "ADBDA", "ABCBA", "ADBDA", " AAA "],
      result: {
        count: 2,
        item: "create:crushing_wheel",
      },
      id: "may:mechanical_crafting/crushing_wheel",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "create:mechanical_crafting";
    event.custom(recipe).id(recipe.id);
  });
});
