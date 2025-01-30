ServerEvents.recipes((event) => {
  let recipes = [
    /*
    {
      output: "create:andesite_alloy",
      pattern: ["ABA", "BCB", "ABA"],
      key: {
        A: "create:andesite_alloy",
        B: "create:andesite_alloy",
        C: "create:andesite_alloy",
      },
      id: "create:shaped/andesite_alloy",
    },
    */
  ];

  global.woodList.forEach((wood) => {
    recipes.push(
      {
        output: `tfc:wood/clutch/${wood}`,
        pattern: [" C ", "BAB", "   "],
        key: {
          A: `tfc:wood/encased_axle/${wood}`,
          B: "kubejs:wooden_gear",
          C: "tfc:glue",
        },
        id: `tfc:shapeless/clutch/${wood}`,
      },
      {
        output: `tfc:wood/gear_box/${wood}`,
        pattern: ["CB ", "BAB", " B "],
        key: {
          A: `tfc:wood/encased_axle/${wood}`,
          B: "kubejs:wooden_gear",
          C: "tfc:glue",
        },
        id: `tfc:shapeless/gear_box/${wood}`,
      }
    );
  });

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
