ServerEvents.generateData("after_mods", (event) => {
  global.panningList.forEach((deposit) => {
    event.json(`tfc:tfc/deposit/gravel/${deposit.rock}`, {
      ingredient: { item: `tfc:rock/gravel/${deposit.rock}` },
      loot_table: `may:panning/gravel/${deposit.rock}`,
      model_stages: [
        `tfc:item/pan/cassiterite/${deposit.rock}_full`,
        `tfc:item/pan/cassiterite/${deposit.rock}_half`,
        `tfc:item/pan/cassiterite/result`,
      ],
    });
  });
  global.oreList.forEach((ore) => {
    event.json(`tfc:tfc/panning/dirty_dusts/${ore.name}`, {
      ingredient: { item: `kubejs:dirty_dust/${ore.name}` },
      loot_table: `may:panning/dirty_dust/${ore.name}`,
    });
  });
});
