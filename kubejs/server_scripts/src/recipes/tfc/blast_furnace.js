const blastFurnaceRecipe = [
  { input: "kubejs:ore/galena", output: "tfc_ie_addon:metal/lead" },
  { input: "kubejs:ore/native_silver", output: "tfc:metal/silver" },
  { input: "kubejs:ore/sphalerite", output: "tfc:metal/zinc" },
  { input: "kubejs:ore/bismuthinite", output: "tfc:metal/bismuth" },
];

ServerEvents.recipes((event) => {
  blastFurnaceRecipe.forEach((ore) => {
    event.custom({
      type: "tfc:blast_furnace",
      fluid: { ingredient: ore.input, amount: 1 },
      result: { fluid: ore.output, amount: 1 },
      catalyst: { tag: ore.flux ? ore.flux : "tfc:flux" },
    });
  });
});
