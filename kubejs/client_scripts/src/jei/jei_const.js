//priority: 1000

const jei = {
  items: { hide: [], add: [] },
  blocks: { hide: [] },
  fluids: { hide: [] },
  gases: { hide: [] },
  recipes: { hide: [] },
  categories: { hide: [] },
  items: { hide: [] },
};

jei.items.hide = [
  // minecraft
  /minecraft:((wooden)|(stone)|(chainmail)|(iron)|(golden)|(diamond)|(netherite))_((shovel)|(pickaxe)|(axe)|(hoe)|(sword)|(helmet)|(chestplate)|(leggings)|(boots))/,
  "minecraft:trident",
  "minecraft:netherrack",
  "minecraft:sea_lantern",
  "minecraft:iron_bars",
  "minecraft:iron_trapdoor",
  "minecraft:chain",
  /minecraft:.*((oak)|(spruce)|(birch)|(jungle)|(acacia)|(mangrove)|(cherry)|(bamboo)|(crimson)|(warped)).+/,
  /minecraft:.*copper(?!_ingot).*/,
  /minecraft:.*ore/,
  /minecraft:.*((deepslate)|(sandstone)|(andesite)|(granite)|(diorite)|(nether_brick)|(smooth_stone)|(blackstone)|(end_stone)|(purpur)|(prismarin)|(stone_brick)|(mossy)|(cobblestone)|(basalt)).*/,
  /minecraft:stone(?!cutter).*/,
  /minecraft:((coal)|(iron)|(gold)|(emerald)|(lapis)|(diamond)|(netherite))_block/,

  //tfc & addons
  /tfc.*:ore\/.+\/.+/,
  /firmalife:ore\/.+\/.+/,
  /tfc:deposit\/.+\/.+/,
  /tfc:wild_crop\/.+/,

  //immersive & addons
  /immersivegeology:minecraft.*ore.*/,
  /immersivegeology:tfc.*ore.*/,
  "immersiveengineering:pickaxe_steel",
  "immersiveengineering:shader",

  //create & addons
  /create:.*granite.*/,
  /create:.*diorite.*/,
  /create:cut_andesite.*/,
  /create:polished_cut_andesite.*/,
  /create:small_andesite.*/,
  /create:layered_andesite.*/,
  /create:andesite_pillar/,
  /create:.*calcite.*/,
  /create:.*dripstone.*/,
  /create:.*deepslate.*/,
  /create:.*tuff.*/,
  /create:.*asurine.*/,
  /create:.*crimsite.*/,
  /create:.*limestone.*/,
  /create:.*ochrum.*/,
  /create:.*scoria.*/,
  /create:.*scorchia.*/,
  /create:.*veridium.*/,
  /create:.*window_pane.*/,
  /create:.*window.*/,
  /railways:.*locometal.*/,
  /railways:track.*/,
  "create:track",
  /create:crushed.*/,

  //mekanism & addons
  "mekanism:creative_fluid_tank",
  "mekanism:creative_chemical_tank",
  /mekanism:.*ore.*/,

  //farmer's delight & addons

  // AE2 & addons
  "ae2:facade",
  /ae2:.*((axe)|(knife)|(shovel)|(hoe)|(sword)).*/,

  //Pneumatic Craft

  // Misc
];

jei.items.add = [
  "mekanism:creative_fluid_tank",
  "mekanism:creative_chemical_tank",
  "railways:track_coupler",
  "railways:track_switch_andesite",
  "railways:track_switch_brass",
  "railways:track_monorail",
  "railways:track_tfc_chestnut",
  "railways:track_tfc_chestnut_wide",
  "railways:track_tfc_chestnut_narrow",
];

jei.fluids.hide = [];

jei.categories.hide = [
  "create:automatic_packing",
  "create:automatic_shaped",
  "create:automatic_shapeless",
  "create:draining",
  "minecraft:anvil",
  //"immersiveengineering:bottling_machine",
  //"immersiveengineering:blast_furnace_fuel",
  "immersivegeology:geo_hint",
  "pneumaticcraft:amadron_trade",
];
