ServerEvents.recipes((event) => {
  let blastFurnaceOreRecipe = [
    { input: "kubejs:metal/galena", output: "tfc_ie_addon:metal/lead" },
    { input: "kubejs:metal/native_silver", output: "tfc:metal/silver" },
    { input: "kubejs:metal/sphalerite", output: "tfc:metal/zinc" },
    { input: "kubejs:metal/bismuthinite", output: "tfc:metal/bismuth" },
  ];

  blastFurnaceOreRecipe.forEach((ore) => {
    event
      .custom({
        type: "tfc:blast_furnace",
        fluid: { fluid: ore.input, amount: 1 },
        result: { id: ore.output, amount: 1 },
        catalyst: { item: ore.flux ? ore.flux : "tfc:powder/flux" },
      })
      .id(`may:blast_furnace/${/[a-z_]+$/.exec(ore.output)[0]}.json`);
  });
});
