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
                  type: "minecraft:item",
                  name: "tfc:powder/native_copper",
                  conditions: [
                    {
                      condition: "minecraft:random_chance",
                      chance: 0.4,
                    },
                  ],
                },
                {
                  type: "minecraft:item",
                  name: "tfc:powder/native_silver",
                  conditions: [
                    {
                      condition: "minecraft:random_chance",
                      chance: 0.2,
                    },
                  ],
                },
                {
                  type: "minecraft:item",
                  name: "tfc:powder/native_gold",
                  conditions: [
                    {
                      condition: "minecraft:random_chance",
                      chance: 0.1,
                    },
                  ],
                },
                {
                  type: "minecraft:item",
                  name: `tfc:rock/loose/${deposit.rock}`,
                  conditions: [
                    { condition: "minecraft:random_chance", chance: 0.6 },
                  ],
                },
                {
                  type: "minecraft:item",
                  name: deposit.secondary,
                  conditions: [
                    { condition: "minecraft:random_chance", chance: 0.3 },
                  ],
                },
                {
                  type: "minecraft:item",
                  name: deposit.tertiary,
                  conditions: [
                    { condition: "minecraft:random_chance", chance: 0.1 },
                  ],
                },
              ],
            },
          ],
        },
        // DEBUG CODE
        /*
        {
          name: "loot_pool",
          rolls: 1,
          entries: [
            {
              type: "minecraft:item",
              name: "minecraft:stick",
            },
          ],
        },
        */
      ],
    };
    //console.log(JSON.stringify(newJson, null, 4));
    event.addJson(`may:panning/gravel/${deposit.rock}`, newJson);
  });
});
