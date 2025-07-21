ServerEvents.lowPriorityData((event) => {
  global.panningList.forEach((deposit) => {
    event.addJson(`tfc:tfc/panning/gravel/${deposit.rock}`, {
      ingredient: `tfc:rock/gravel/${deposit.rock}`,
      model_stages: [
        `tfc:item/pan/cassiterite/${deposit.rock}_full`,
        `tfc:item/pan/cassiterite/${deposit.rock}_half`,
        `tfc:item/pan/cassiterite/result`,
      ],
      loot_table: `kubejs:panning/gravel/${deposit.rock}`,
    });
  });
});
