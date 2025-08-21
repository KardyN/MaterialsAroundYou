ServerEvents.lowPriorityData((event) => {
  global.oreList.forEach((ore) => {
    event.addJson(`tfc:tfc/sluicing/dirty_dusts/${ore.name}`, {
      ingredient: { item: `kubejs:dirty_dust/${ore.name}` },
      loot_table: `may:sluicing/dirty_dust/${ore.name}`,
    });
  });

  global.panningList.forEach((deposit) => {
    event.addJson(`tfc:tfc/sluicing/gravel/${deposit.rock}`, {
      ingredient: { item: `tfc:rock/gravel/${deposit.rock}` },
      loot_table: `may:sluicing/gravel/${deposit.rock}`,
    });
  });
});
