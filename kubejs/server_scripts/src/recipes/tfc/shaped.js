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
        output: wood.splice(4, "wood/clutch/"),
        pattern: [" C ", "BAB", "   "],
        key: {
          A: wood.splice(4, "wood/encased_axle/"),
          B: "kubejs:wooden_gear",
          C: "tfc:glue",
        },
        id: "may:shapeless/clutch/" + wood.slice(4),
      },
      {
        output: wood.splice(4, "wood/gear_box/"),
        pattern: ["CB ", "BAB", " B "],
        key: {
          A: wood.splice(4, "wood/encased_axle/"),
          B: "kubejs:wooden_gear",
          C: "tfc:glue",
        },
        id: "may:shapeless/gear_box/" + wood.slice(4),
      }
    );
  });

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
