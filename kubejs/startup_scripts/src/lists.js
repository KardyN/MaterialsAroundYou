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
  "kubejs:metal/prospector_pickaxe/osmirite",
  "kubejs:metal/prospector_hammer/osmirite",
  "kubejs:metal/prospector_drill/osmirite",
  "kubejs:metal/mineral_prospector/osmirite",
  "kubejs:metal/prospector_pickaxe/osmirite",
];
