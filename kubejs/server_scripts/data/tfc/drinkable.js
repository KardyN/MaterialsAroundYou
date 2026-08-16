ServerEvents.generateData("after_mods", (event) => {
  let drinkables = [
    {
      ingredient: { fluid: "kubejs:boiled_water" },
      may_drink_when_full: true,
      water: 10.0,
      id: "boiled_water",
    },
    {
      ingredient: [{ fluid: "minecraft:water" }, { fluid: "tfc:river_water" }],
      may_drink_when_full: true,
      water: 10.0,
      effects: [
        {
          effect: "minecraft:nausea",
          duration: 400,
          chance: 0.1,
          amplifier: 0,
        },
        {
          effect: "minecraft:mining_fatigue",
          duration: 600,
          chance: 0.1,
          amplifier: 0,
        },
        {
          effect: "minecraft:poison",
          duration: 60,
          chance: 0.1,
          amplifier: 0,
        },
      ],
      id: "fresh_water",
    },
    {
      ingredient: { fluid: "mekanism:heavy_water" },
      may_drink_when_full: true,
      water: 10.0,
      effects: [
        {
          effect: "minecraft:poison",
          duration: 1000,
          chance: 1.0,
          amplifier: 1,
        },
      ],
      id: "heavy_water",
    },
  ];

  drinkables.forEach((drinkable) => {
    event.json(`tfc:tfc/drinkable/${drinkable.id}.json`, drinkable);
  });
});
