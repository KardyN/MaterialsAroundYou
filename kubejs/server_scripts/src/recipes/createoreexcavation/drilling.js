ServerEvents.recipes((event) => {
  event.remove({ type: "createoreexcavation:drilling" });

  const defaultStress = 1024;
  const defaultTicks = 600;
  const defaultDrill = "#createoreexcavation:drills";
  const defaultFluid = { fluid: "minecraft:water", nbt: {}, amount: 500 };
  //Arguments: output item(s), ore vein id, extraction time in ticks at 32 RPM.

  global.mineralVeinsList.forEach((vein) => {
    event.recipes.createoreexcavation
      .drilling(
        vein.coe.outputs,
        `kubejs:veins/${vein.name}`,
        Object.prototype.hasOwnProperty(vein.coe, "ticks")
          ? vein.coe.ticks
          : defaultTicks
      )
      .drill(
        Object.prototype.hasOwnProperty(vein.coe, "drill")
          ? vein.coe.drill
          : defaultDrill
      )
      .stress(
        Object.prototype.hasOwnProperty(vein.coe, "stress")
          ? vein.coe.stress
          : defaultStress
      )
      .fluid(
        Object.prototype.hasOwnProperty(vein.coe, "fluid")
          ? vein.coe.fluid
          : defaultFluid
      );
  });
});
