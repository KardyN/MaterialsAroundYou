const itemHeatList = [
  {
    ingredient: { item: "create:andesite_alloy" },
    heat_capacity: 1.667,
    forging_temperature: 276,
    welding_temperature: 368,
  },
  {
    ingredient: { tag: "may:blooms" },
    heat_capacity: 2.857,
  },
];

ServerEvents.generateData("after_mods", (event) => {
  itemHeatList.forEach((item) => {
    event.json(
      `tfc:tfc/item_heats/${/[a-z_]+$/.exec(item.ingredient.item)[0]}.json`,
      item
    );
  });
});
