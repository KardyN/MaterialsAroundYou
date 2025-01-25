const itemHeatList = [
  {
    ingredient: { item: "create:andesite_alloy" },
    heat_capacity: 1.667,
    forging_temperature: 276,
    welding_temperature: 368,
  },
];

ServerEvents.highPriorityData((event) => {
  itemHeatList.forEach((item) => {
    event.addJson(
      `tfc:tfc/item_heats/${/[a-z_]+$/.exec(item.ingredient.item)[0]}.json`,
      item
    );
  });
});
