ServerEvents.generateData("after_mods", (event) => {
  let drinkables = [
    {
      ingredient: "kubejs:boiled_water",
      thirst: 10,
      id: "boiled_water",
    },
    {
      ingredient: ["minecraft:water", "tfc:river_water"],
      thirst: 10,
      effects: [
        { type: "minecraft:nausea", duration: 600, chance: 0.3 },
        { type: "minecraft:mining_fatigue", duration: 600, chance: 0.3 },
        { type: "minecraft:poison", duration: 300, chance: 0.1 },
      ],
      id: "fresh_water",
    },
    {
      ingredient: "mekanism:heavy_water",
      thirst: 10,
      effects: [{ type: "minecraft:poison", duration: 1000, chance: 1.0 }],
      id: "heavy_water",
    },
  ];

  drinkables.forEach((drinkable) => {
    event.json(`tfc:tfc/drinkables/${drinkable.id}.json`, drinkable);
  });
});
