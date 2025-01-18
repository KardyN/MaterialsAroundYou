ServerEvents.recipes((event) => {
  global.oreTypes.forEach((item) => {
    event.recipes.tfc.quern(
      "1x kubejs:dirty_dust_" + item.id,
      "kubejs:clump_" + item.id
    );
  });
});
