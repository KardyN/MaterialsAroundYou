ServerEvents.genericLootTables((event) => {
  global.oreList.forEach((ore) => {
    let { name, mod, sand, gems } = ore;
    let newJson = {
      type: "minecraft:empty",
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
                  name:
                    name == "chromite"
                      ? `kubejs:powder/${name}`
                      : `${mod}:powder/${name}`,
                  conditions: [
                    {
                      condition: "minecraft:random_chance",
                      chance: 0.999,
                    },
                  ],
                },
                {
                  type: "minecraft:group",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          rolls: 1,
          entries: [
            {
              type: "minecraft:item",
              name: `kubejs:pile/${sand}_sand`,
            },
          ],
        },
      ],
    };
    gems.forEach((gem) => {
      newJson.pools[0].entries[0].children[1].children.push({
        type: "minecraft:item",
        name: `tfc:powder/${gem}`,
      });
    });
    event.addJson(`may:sluicing/dirty_dust/${name}`, newJson);
  });

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
    event.addJson(`may:sluicing/gravel/${deposit.rock}`, newJson);
  });
});
