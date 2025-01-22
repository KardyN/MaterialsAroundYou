const wrapperAddJson = (event, ore) => {
  const { name, mod, sand, gems } = ore;
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
                name: `${mod}:powder/${name}`,
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
  event.addJson(`kubejs:dirty_dust/${name}`, newJson);
};

ServerEvents.genericLootTables((event) => {
  global.oreList.forEach((ore) => {
    wrapperAddJson(event, ore);
  });
});

TFCEvents.data((event) => {
  global.oreList.forEach((ore) => {
    event.sluicing(
      "kubejs:dirty_dust/" + ore.name,
      "kubejs:dirty_dust/" + ore.name
    );
  });
});
