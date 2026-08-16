//priority: 1000

const jei = {
  items: { add: [], remove: [], group: [] },
  fluids: { remove: [] },
  // gases: { hide: [] },
  // recipes: { hide: [] },
  // categories: { hide: [] },
};

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

jei.items.remove = [
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
  /minecraft:((iron)|(golden)|(diamond))_horse_armor/,
  "minecraft:gold_ingot",
  "minecraft:copper_ingot",
  "minecraft:iron_ingot",
  /minecraft:*shulker_box/,
  /minecraft:sculk*/,
  "minecraft:suspicious_stew",
  "minecraft:enchanted_book",
  "minecraft:potion",
  "minecraft:splash_potion",
  "minecraft:lingering_potion",
  /^minecraft:.*amethyst_bud$/,
  /^minecraft:.*coral$/,
  /^minecraft:.*coral_fan$/,

  // tfc
  /tfc.*:ore\/.+\/.+/,
  /tfc:deposit\/.+\/.+/,
  /tfc:wild_crop\/.+/,

  // firmalife
  /firmalife:ore\/.+\/.+/,

  // immersive engineering
  "immersiveengineering:pickaxe_steel",
  /^immersiveengineering:shader.+$/,
  "immersiveengineering:ingot_steel",
  "immersiveengineering:ingot_silver",
  "immersiveengineering:ingot_nickel",
  "immersiveengineering:ingot_lead",
  "immersiveengineering:ingot_uranium",
  "immersiveengineering:potion_bucket",
  "immersiveengineering:stick_iron",
  "immersiveengineering:stick_steel",
  "immersiveengineering:stick_aluminum",

  // immersive petroleum
  "immersivepetroleum:petcoke_dust",

  // create
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
  "create:track",
  /create:crushed.*/,
  "create:brass_ingot",
  "create:zinc_ingot",

  // create addition
  "createaddition:electrum_ingot",

  // railways
  /railways:track.*/,

  // create ore excavation
  /createoreexcavation:raw.+/,

  //mekanism & addons
  "mekanism:creative_fluid_tank",
  "mekanism:creative_chemical_tank",
  /mekanism:.*ore.*/,
  "mekanism:ingot_steel",
  "mekanism:ingot_bronze",
  "mekanism:ingot_tin",

  // farmer's delight

  // ae2
  "ae2:facade",
  /ae2:.*((axe)|(knife)|(shovel)|(hoe)|(sword)).*/,

  // pneumatic craft

  // may
  /kubejs:metal\/*prospector*\/osmirite/,

  // misc
  "ftblibrary:icon_item",
];

jei.fluids.remove = ["immersiveengineering:potion", "create:potion"];

// DOESNT WORK YET
// jei.categories.hide = [
//   "create:automatic_packing",
//   "create:automatic_shaped",
//   "create:automatic_shapeless",
//   "create:draining",
//   "minecraft:anvil",
//   //"immersiveengineering:bottling_machine",
//   //"immersiveengineering:blast_furnace_fuel",
//   "immersivegeology:geo_hint",
//   "pneumaticcraft:amadron_trade",
//   "emi:repairing",
//   "emi:grinding",
// ];
