ServerEvents.recipes((event) => {
  let recipes = [
    {
      output: "tfc:fire_clay",
      inputs: [
        "tfc:powder/kaolinite",
        "tfc:powder/graphite",
        "minecraft:clay_ball",
      ],
      id: "may:crafting/fire_clay",
    },
    // cutting hides w/ knives
    {
      output: "6x minecraft:leather",
      inputs: ["kubejs:large_waterproof_hide", "#c:tools/knife"],
      id: "may:crafting/large_waterproof_hide_to_leather_with_knives",
    },
    {
      output: "4x minecraft:leather",
      inputs: ["kubejs:medium_waterproof_hide", "#c:tools/knife"],
      id: "may:crafting/medium_waterproof_hide_to_leather_with_knives",
    },
    {
      output: "2x minecraft:leather",
      inputs: ["kubejs:small_waterproof_hide", "#c:tools/knife"],
      id: "may:crafting/small_waterproof_hide_to_leather_with_knives",
    },
    // cutting hides w/ shears
    {
      output: "6x minecraft:leather",
      inputs: ["kubejs:large_waterproof_hide", "#c:tools/shear"],
      id: "may:crafting/large_waterproof_hide_to_leather_with_shears",
    },
    {
      output: "4x minecraft:leather",
      inputs: ["kubejs:medium_waterproof_hide", "#c:tools/shear"],
      id: "may:crafting/medium_waterproof_hide_to_leather_with_shears",
    },
    {
      output: "2x minecraft:leather",
      inputs: ["kubejs:small_waterproof_hide", "#c:tools/shear"],
      id: "may:crafting/small_waterproof_hide_to_leather_with_shears",
    },
  ];

  global.powderList.forEach((powder) => {
    recipes.push(
      {
        output: `4x ${powder.mod}:powder/${powder.name}`,
        inputs: [`kubejs:pile/${powder.name}`],
        id: `may:shapeless/pile_to_powder/${powder.name}`,
      },
      {
        output: `kubejs:pile/${powder.name}`,
        inputs: [`4x ${powder.mod}:powder/${powder.name}`],
        id: `may:shapeless/powder_to_pile/${powder.name}`,
      }
    );
  });

  global.sandColors.forEach((color) => {
    recipes.push({
      output: `tfc:sand/${color}`,
      inputs: [`4x kubejs:pile/${color}_sand`],
      id: `may:shapeless/${color}_sand`,
    });
  });

  recipes.forEach((recipe) => {
    event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  });
});
