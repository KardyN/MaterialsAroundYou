ServerEvents.recipes((event) => {
  let recipes = [];

  global.powderList.forEach((powder) => {
    recipes.push(
      {
        output: `4x ${powder.mod}:powder/${powder.name}`,
        inputs: [`kubejs:pile/${powder.name}`],
        id: `tfc:shapeless/pile_to_powder/${powder.name}`,
      },
      {
        output: `kubejs:pile/${powder.name}`,
        inputs: [`4x ${powder.mod}:powder/${powder.name}`],
        id: `tfc:shapeless/powder_to_pile/${powder.name}`,
      }
    );
  });

  global.sandColors.forEach((color) => {
    recipes.push({
      output: `tfc:sand/${color}`,
      inputs: [`4x kubejs:pile/${color}_sand`],
      id: `tfc:shapeless/${color}_sand`,
    });
  });

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
