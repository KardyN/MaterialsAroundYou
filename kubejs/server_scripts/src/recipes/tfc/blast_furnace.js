ServerEvents.recipes((event) => {
  let blastFurnaceRecipe = [
    { input: "kubejs:metal/galena", output: "tfc_ie_addon:metal/lead" },
    { input: "kubejs:metal/native_silver", output: "tfc:metal/silver" },
    { input: "kubejs:metal/sphalerite", output: "tfc:metal/zinc" },
    { input: "kubejs:metal/bismuthinite", output: "tfc:metal/bismuth" },
  ];

  blastFurnaceRecipe.forEach((ore) => {
    event
      .custom({
        type: "tfc:blast_furnace",
        fluid: { ingredient: ore.input, amount: 1 },
        result: { fluid: ore.output, amount: 1 },
        catalyst: { tag: ore.flux ? ore.flux : "tfc:flux" },
      })
      .id(`tfc:blast_furnace/${/[a-z_]+$/.exec(ore.output)[0]}.json`);
  });
});
