//priority: 1000
global.oreList = [
  // opal should drop from graphite and cinnabar
  {
    name: "native_copper",
    mod: "tfc",
    sand: "pink",
    gems: [],
  },
  {
    name: "native_gold",
    mod: "tfc",
    sand: "yellow",
    gems: [],
  },
  {
    name: "hematite",
    mod: "tfc",
    sand: "pink",
    gems: ["amethyst"],
  },
  {
    name: "native_silver",
    mod: "tfc",
    sand: "white",
    gems: [],
  },
  {
    name: "cassiterite",
    mod: "tfc",
    sand: "green",
    gems: ["topaz"],
  },
  {
    name: "bismuthinite",
    mod: "tfc",
    sand: "green",
    gems: [],
  },
  {
    name: "garnierite",
    mod: "tfc",
    sand: "green",
    gems: [],
  },
  {
    name: "malachite",
    mod: "tfc",
    sand: "green",
    gems: [],
  },
  {
    name: "magnetite",
    mod: "tfc",
    sand: "black",
    gems: ["amethyst", "sapphire"],
  },
  {
    name: "limonite",
    mod: "tfc",
    sand: "yellow",
    gems: ["amethyst"],
  },
  {
    name: "sphalerite",
    mod: "tfc",
    sand: "white",
    gems: [],
  },
  {
    name: "tetrahedrite",
    mod: "tfc",
    sand: "black",
    gems: ["pyrite"],
  },
  {
    name: "bauxite",
    mod: "tfc_ie_addon",
    sand: "pink",
    gems: [],
  },
  {
    name: "galena",
    mod: "tfc_ie_addon",
    sand: "black",
    gems: ["pyrite"],
  },
  {
    name: "uraninite",
    mod: "tfc_ie_addon",
    sand: "green",
    gems: [],
  },
  {
    name: "chromite",
    mod: "firmalife",
    sand: "white",
    gems: ["ruby", "sapphire"],
  },
  //black, brown, green, pink, red, white, yellow
  //amethyst, diamond, emerald, lapis_lazuli, opal, pyrite, ruby, sapphire, topaz "gem"
];

global.powderList = [
  {
    name: "native_copper",
    mod: "tfc",
  },
  {
    name: "native_gold",
    mod: "tfc",
  },
  {
    name: "hematite",
    mod: "tfc",
  },
  {
    name: "native_silver",
    mod: "tfc",
  },
  {
    name: "cassiterite",
    mod: "tfc",
  },
  {
    name: "bismuthinite",
    mod: "tfc",
  },
  {
    name: "garnierite",
    mod: "tfc",
  },
  {
    name: "malachite",
    mod: "tfc",
  },
  {
    name: "magnetite",
    mod: "tfc",
  },
  {
    name: "limonite",
    mod: "tfc",
  },
  {
    name: "sphalerite",
    mod: "tfc",
  },
  {
    name: "tetrahedrite",
    mod: "tfc",
  },
  {
    name: "bauxite",
    mod: "tfc_ie_addon",
  },
  {
    name: "galena",
    mod: "tfc_ie_addon",
  },
  {
    name: "uraninite",
    mod: "tfc_ie_addon",
  },
  {
    name: "chromite",
    mod: "kubejs",
  },
];

global.alloyRecipeList = [
  {
    result: "tfc:rose_gold",
    contents: [
      ["tfc:gold", 0.7, 0.8],
      ["tfc:copper", 0.2, 0.25],
      ["tfc:silver", 0.05, 0.1],
    ],
  },
  {
    result: "tfc:bronze",
    contents: [
      ["tfc:copper", 0.85, 0.9],
      ["tfc:tin", 0.1, 0.15],
    ],
  },
  {
    result: "kubejs:bearing_alloy",
    contents: [
      ["tfc:tin", 0.85, 0.9],
      ["tfc:copper", 0.1, 0.15],
    ],
  },
  {
    result: "tfc:brass",
    contents: [
      ["tfc:copper", 0.6, 0.7],
      ["tfc:zinc", 0.3, 0.35],
    ],
  },
  {
    result: "tfc:sterling_silver",
    contents: [
      ["tfc:copper", 0.85, 0.9],
      ["tfc:silver", 0.1, 0.15],
    ],
  },
  {
    result: "tfc_ie_addon:electrum",
    contents: [
      ["tfc:gold", 0.4, 0.6],
      ["tfc:silver", 0.4, 0.6],
    ],
  },
  {
    result: "tfc:bismuth_bronze",
    contents: [
      ["tfc:copper", 0.5, 0.6],
      ["tfc:zinc", 0.25, 0.3],
      ["tfc:bismuth", 0.15, 0.2],
    ],
  },
  {
    result: "tfc:black_bronze",
    contents: [
      ["tfc:copper", 0.5, 0.6],
      ["tfc:gold", 0.15, 0.25],
      ["tfc:silver", 0.15, 0.25],
    ],
  },
  {
    result: "tfc:weak_steel",
    contents: [
      ["tfc:steel", 0.75, 0.85],
      ["tfc:nickel", 0.15, 0.25],
    ],
  },
  {
    result: "tfc:weak_red_steel",
    contents: [
      ["tfc:steel", 0.4, 0.6],
      ["tfc_ie_addon:aluminum", 0.4, 0.6],
    ],
  },
  {
    result: "tfc:weak_blue_steel",
    contents: [
      ["tfc:steel", 0.7, 0.8],
      ["tfc:nickel", 0.1, 0.2],
      ["firmalife:chromium", 0.1, 0.2],
    ],
  },
  {
    result: "tfc_ie_addon:constantan",
    contents: [
      ["tfc:copper", 0.55, 0.65],
      ["tfc:nickel", 0.35, 0.45],
    ],
  },
];

global.smallOreYieldByQualityDictionary = {
  poor: "2",
  normal: "3",
  rich: "4",
};

global.sandColors = [
  "black",
  "brown",
  "green",
  "pink",
  "red",
  "white",
  "yellow",
];

global.metalToolHeads = [
  "pickaxe_head",
  "sword_blade",
  "axe_head",
  "shovel_head",
  "hoe_head",
  "chisel_head",
  "hammer_head",
  "saw_blade",
  "knife_blade",
  "scythe_blade",
  "javelin_head",
  "propick_head",
  "mace_head",
  "fish_hook",
  "prospector_hammer_head",
  "prospector_drill_head",
  "mineral_prospector_head",
];

global.osmiriteToolList = [
  "pickaxe",
  "sword",
  "axe",
  "shovel",
  "hoe",
  "chisel",
  "hammer",
  "saw",
  "knife",
  "scythe",
  "javelin",
  "propick",
  "mace",
  "prospector_hammer",
  "prospector_drill",
  "mineral_prospector",
];
global.commonToolTagList = [
  "immersiveengineering:toolbox/tools",
  "minecraft:breaks_decorated_pots",
  "minecraft:tools",
  "forge:tools",
  "tfc:metal_item/osmirite_tools",
  "tfc:metal_item/osmirite",
  "tfc:usable_on_tool_rack",
];
global.fishingRodTagList = [
  "tfc:holds_small_fishing_bait",
  "tfc:holds_large_fishing_bait",
  "tfc:usable_on_tool_rack",
  "tfc:metal_item/osmirite",
  "forge:fishing_rods",
  "forge:fishing_rods/osmirite",
];
global.shearsTagList = [
  "tfc:usable_on_tool_rack",
  "tfc:metal_item/osmirite",
  "forge:shears",
  "tfc:shears",
];
global.multitoolIds = [
  "kubejs:prospector_pickaxe/osmirite",
  "kubejs:prospector_hammer/osmirite",
  "kubejs:prospector_drill/osmirite",
  "kubejs:mineral_prospector/osmirite",
  "kubejs:prospector_pickaxe/osmirite",
];
