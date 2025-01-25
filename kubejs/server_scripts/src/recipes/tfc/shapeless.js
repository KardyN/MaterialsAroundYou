ServerEvents.recipes((event) => {
  const recipes = [
    /*
    {
      output: "create:andesite_alloy",
      inputs: ["2x create:andesite_alloy"],
      id: "create:shapeless/andesite_alloy",
    },
    */
  ];

  global.woodList.forEach((wood) => {
    recipes.push({
      output: `tfc:wood/axle/${wood}`,
      inputs: [`#tfc:${wood}_logs`, "#tfc:saws", "tfc:glue"],
      id: `tfc:shapeless/${wood}_axle`,
    });
    recipes.push({
      output: `tfc:wood/bladed_axle/${wood}`,
      inputs: [`tfc:wood/axle/${wood}`, "#tfc:hammers", "#tfc:pileable_ingots"],
      id: `tfc:shapeless/${wood}_bladed_axle`,
    });
  });

  recipes.forEach((recipe) => {
    event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  });
});
