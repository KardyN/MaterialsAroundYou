ServerEvents.recipes((event) => {
  let recipes = [
    {
      output: Item.of("tfc:fire_bricks", 4),
      pattern: ["ABA", "BAB", "ABA"],
      key: {
        A: "tfc:ceramic/fire_brick",
        B: "tfc:mortar",
      },
      id: "may:shaped/fire_bricks",
    },
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
        id: "may:shaped/clutch/" + wood.slice(4),
      },
      {
        output: wood.splice(4, "wood/gear_box/"),
        pattern: ["CB ", "BAB", " B "],
        key: {
          A: wood.splice(4, "wood/encased_axle/"),
          B: "kubejs:wooden_gear",
          C: "tfc:glue",
        },
        id: "may:shaped/gear_box/" + wood.slice(4),
      }
    );
  });

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
