ServerEvents.genericLootTables((event) => {
  global.panningList.forEach((deposit) => {
    let newJson = {
      type: "minecraft:fishing",
      pools: [
        {
          name: "loot_pool",
          rolls: 1,
          entries: [
            {
              type: "minecraft:alternatives",
              children: [
                {
                  type: "minecraft:group",
                  conditions: [
                    { condition: "minecraft:random_chance", chance: 0.5 },
                  ],
                  children: [],
                },
                {
                  type: "minecraft:item",
                  name: `tfc:rock/loose/${deposit.rock}`,
                  conditions: [
                    { condition: "minecraft:random_chance", chance: 0.5 },
                  ],
                },
                {
                  type: "minecraft:item",
                  name: deposit.secondary,
                  conditions: [
                    { condition: "minecraft:random_chance", chance: 0.25 },
                  ],
                },
                {
                  type: "minecraft:item",
                  name: deposit.tertiary,
                  conditions: [
                    { condition: "minecraft:random_chance", chance: 0.0533 },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
    deposit.ores.forEach((ore) => {
      newJson.pools[0].entries[0].children[0].children.push({
        type: "minecraft:item",
        name: ore,
      });
    });
    //console.log(JSON.stringify(newJson, null, 4));
    event.addJson(`kubejs:panning/gravel/${deposit.rock}`, newJson);
  });
});
