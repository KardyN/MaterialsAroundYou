ServerEvents.genericLootTables((event) => {
  global.oreTypes.forEach((item) => {
    switch (item.id) {
      case "native_copper":
      case "native_gold":
      case "native_silver":
      case "bismuthinite":
      case "garnierite":
      case "malachite":
      case "sphalerite":
        event.addJson("kubejs:dirty_dust_" + item.id, {
          type: "minecraft:empty",
          pools: [
            {
              name: "loot_pool",
              rolls: 1,
              entries: [
                {
                  type: "minecraft:item",
                  name: "tfc:powder/" + item.id,
                  conditions: [
                    {
                      condition: "minecraft:random_chance",
                      chance: 0.9,
                    },
                  ],
                },
                {
                  type: "minecraft:item",
                  name: "kubejs:powder_sand_" + item.sand,
                  conditions: [
                    {
                      condition: "minecraft:random_chance",
                      chance: 0.95,
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;
      case "bauxite":
      case "uraninite":
        event.addJson("kubejs:dirty_dust_" + item.id, {
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
                      name: "tfc_ie_addon:powder/" + item.id,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.9,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "kubejs:powder_sand_" + item.sand,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.95,
                        },
                      ],
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;
      case "galena":
        event.addJson("kubejs:dirty_dust_" + item.id, {
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
                      name: "tfc_ie_addon:powder/" + item.id,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.9,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "kubejs:powder_sand_" + item.sand,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.95,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "tfc:powder/pyrite",
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;
      case "chromite":
        event.addJson("kubejs:dirty_dust_" + item.id, {
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
                      name: "kubejs:powder_chromite",
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.9,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "kubejs:powder_sand_" + item.sand,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.95,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "tfc:powder/ruby",
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.5,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "tfc:powder/sapphire",
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;
      case "limonite":
        event.addJson("kubejs:dirty_dust_" + item.id, {
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
                      name: "tfc:powder/" + item.id,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.9,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "kubejs:powder_sand_" + item.sand,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.95,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "tfc:powder/amethyst",
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;
      case "hematite":
        event.addJson("kubejs:dirty_dust_" + item.id, {
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
                      name: "tfc:powder/" + item.id,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.9,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "kubejs:powder_sand_" + item.sand,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.95,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "tfc:powder/amethyst",
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;
      case "magnetite":
        event.addJson("kubejs:dirty_dust_" + item.id, {
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
                      name: "kubejs:powder_" + item.id,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.9,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "kubejs:powder_sand_" + item.sand,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.95,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "tfc:powder/amethyst",
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.5,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "tfc:powder/sapphire",
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;
      case "graphite":
        event.addJson("kubejs:dirty_dust_" + item.id, {
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
                      name: "tfc:powder/" + item.id,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.9,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "kubejs:powder_sand_" + item.sand,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.95,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "tfc:powder/opal",
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;
      case "cinnabar":
        event.addJson("kubejs:dirty_dust_" + item.id, {
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
                      name: "tfc:powder/" + item.id,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.9,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "kubejs:powder_sand_" + item.sand,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.95,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "tfc:powder/opal",
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;
      case "tetrahedrite":
        event.addJson("kubejs:dirty_dust_" + item.id, {
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
                      name: "tfc:powder/" + item.id,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.9,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "kubejs:powder_sand_" + item.sand,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.95,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "tfc:powder/pyrite",
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;
      case "cassiterite":
        event.addJson("kubejs:dirty_dust_" + item.id, {
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
                      name: "tfc:powder/" + item.id,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.9,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "kubejs:powder_sand_" + item.sand,
                      conditions: [
                        {
                          condition: "minecraft:random_chance",
                          chance: 0.95,
                        },
                      ],
                    },
                    {
                      type: "minecraft:item",
                      name: "tfc:powder/topaz",
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;
      case "gypsum":
      case "cryolite":
        event.addJson("kubejs:dirty_dust_" + item.id, {
          type: "minecraft:empty",
          pools: [
            {
              name: "loot_pool",
              rolls: 1,
              entries: [
                {
                  type: "minecraft:item",
                  name: "kubejs:powder_" + item.id,
                  conditions: [
                    {
                      condition: "minecraft:random_chance",
                      chance: 0.9,
                    },
                  ],
                },
                {
                  type: "minecraft:item",
                  name: "kubejs:powder_sand_" + item.sand,
                  conditions: [
                    {
                      condition: "minecraft:random_chance",
                      chance: 0.95,
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;
      case "sulfur":
      case "saltpeter":
      case "sylvite":
        event.addJson("kubejs:dirty_dust_" + item.id, {
          type: "minecraft:empty",
          pools: [
            {
              name: "loot_pool",
              rolls: 1,
              entries: [
                {
                  type: "minecraft:item",
                  name: "tfc:powder/" + item.id,
                  conditions: [
                    {
                      condition: "minecraft:random_chance",
                      chance: 0.9,
                    },
                  ],
                },
                {
                  type: "minecraft:item",
                  name: "kubejs:powder_sand_" + item.sand,
                  conditions: [
                    {
                      condition: "minecraft:random_chance",
                      chance: 0.95,
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;
      case "borax":
        event.addJson("kubejs:dirty_dust_" + item.id, {
          type: "minecraft:empty",
          pools: [
            {
              name: "loot_pool",
              rolls: 1,
              entries: [
                {
                  type: "minecraft:item",
                  name: "tfc:powder/flux",
                  conditions: [
                    {
                      condition: "minecraft:random_chance",
                      chance: 0.9,
                    },
                  ],
                },
                {
                  type: "minecraft:item",
                  name: "kubejs:powder_sand_" + item.sand,
                  conditions: [
                    {
                      condition: "minecraft:random_chance",
                      chance: 0.95,
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
                  name: "kubejs:powder_sand_" + item.sand,
                },
              ],
            },
          ],
        });
        break;

      default:
        console.log("[ERROR] Failed to add sluicing loot table for " + item.id);
    }
  });
});

global.oreTypes.forEach((item) => {
  TFCEvents.data((event) => {
    event.sluicing(
      "kubejs:dirty_dust_" + item.id,
      "kubejs:dirty_dust_" + item.id
    );
  });
});
