const oreTypesSluicing = [
  {
    id: "native_copper",
    color: "#d88854",
    type: "tfc_ore",
    sand: "pink",
  },
  {
    id: "native_gold",
    color: "#c89d28",
    type: "tfc_ore",
    sand: "yellow",
  },
  {
    id: "hematite",
    color: "#b05e56",
    type: "tfc_ore",
    sand: "pink",
  },
  {
    id: "native_silver",
    color: "#b4b7c4",
    type: "tfc_ore",
    sand: "white",
  },
  {
    id: "cassiterite",
    color: "#6a6655",
    type: "tfc_ore",
    sand: "green",
  },
  {
    id: "bismuthinite",
    color: "#416f3d",
    type: "tfc_ore",
    sand: "green",
  },
  {
    id: "garnierite",
    color: "#3c5035",
    type: "tfc_ore",
    sand: "green",
  },
  {
    id: "malachite",
    color: "#587e79",
    type: "tfc_ore",
    sand: "green",
  },
  {
    id: "magnetite",
    color: "#3b3c3c",
    type: "tfc_ore",
    sand: "black",
  },
  {
    id: "limonite",
    color: "#93714a",
    type: "tfc_ore",
    sand: "yellow",
  },
  {
    id: "sphalerite",
    color: "#a4a3a3",
    type: "tfc_ore",
    sand: "white",
  },
  {
    id: "tetrahedrite",
    color: "#838283",
    type: "tfc_ore",
    sand: "black",
  },
  {
    id: "gypsum",
    color: "#977c62",
    type: "tfc_mineral",
    sand: "brown",
  },
  {
    id: "graphite",
    color: "#3a4249",
    type: "tfc_mineral",
    sand: "black",
  },
  {
    id: "sulfur",
    color: "#aaa552",
    type: "tfc_mineral",
    sand: "yellow",
  },
  {
    id: "cinnabar",
    color: "#ac161d",
    type: "tfc_mineral",
    sand: "red",
  },
  {
    id: "cryolite",
    color: "#909191",
    type: "tfc_mineral",
    sand: "white",
  },
  {
    id: "saltpeter",
    color: "#aaaaa9",
    type: "tfc_mineral",
    sand: "white",
  },
  {
    id: "sylvite",
    color: "#b98761",
    type: "tfc_mineral",
    sand: "yellow",
  },
  {
    id: "borax",
    color: "#a7a8a7",
    type: "tfc_mineral",
    sand: "white",
  },
  {
    id: "bauxite",
    color: "#e77263",
    type: "tfc_ie_ore",
    sand: "pink",
  },
  {
    id: "galena",
    color: "#5f5764",
    type: "tfc_ie_ore",
    sand: "black",
  },
  {
    id: "uraninite",
    color: "#7a9a65",
    type: "tfc_ie_ore",
    sand: "green",
  },
  {
    id: "chromite",
    color: "#ebebe8",
    type: "firmalife_ore",
    sand: "white",
  },
  //black, brown, green, pink, red, white, yellow
  //amethyst, diamond, emerald, lapis_lazuli, opal, pyrite, ruby, sapphire, topaz "gem"
];

ServerEvents.genericLootTables((event) => {
  oreTypesSluicing.forEach((item) => {
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

oreTypesSluicing.forEach((item) => {
  TFCEvents.data((event) => {
    event.sluicing(
      "kubejs:dirty_dust_" + item.id,
      "kubejs:dirty_dust_" + item.id
    );
  });
});
