ServerEvents.recipes((event) => {
  global.oreList.forEach((ore) => {
    event.recipes.tfc.quern(
      `1x kubejs:powder/dirty_${ore.name}`,
      `${ore.mod}:ore/small_${ore.name}`
    );
  });
});
