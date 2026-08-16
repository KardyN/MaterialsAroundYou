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
  {
    forging_temperature: 1400.0,
    heat_capacity: 2.857143,
    ingredient: { tag: "c:ingots/osmirite" },
    welding_temperature: 1951.0,
  },
  {
    forging_temperature: 1400.0,
    heat_capacity: 5.714286,
    ingredient: { tag: "c:double_ingots/osmirite" },
    welding_temperature: 1951.0,
  },
  {
    forging_temperature: 1400.0,
    heat_capacity: 5.714286,
    ingredient: { tag: "c:sheets/osmirite" },
    welding_temperature: 1951.0,
  },
];

ServerEvents.generateData("after_mods", (event) => {
  itemHeatList.forEach((item) => {
    event.json(
      `tfc:tfc/item_heat/${/[a-z_]+$/.exec(item.ingredient.item)[0]}.json`,
      item
    );
  });
});
