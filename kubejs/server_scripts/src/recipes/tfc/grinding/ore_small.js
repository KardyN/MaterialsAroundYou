ServerEvents.recipes((event) => {
  global.oreList.forEach((ore) => {
    event.custom({
      type: "tfc:quern",
      ingredient: {
        item: `${ore.mod}:ore/small_${ore.name}`,
      },
      result: {
        item: `kubejs:dirty_dust/${ore.name}`,
        count: 1,
      },
    });
  });
});
