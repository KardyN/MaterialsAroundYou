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
  /create:.*granite.*/,
  /create:.*diorite.*/,
  /create:.*andesite.*/,
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
  /tfc.*:ore\/.+\/.+/,
  /firmalife:ore\/.+\/.+/,
  /tfc:deposit\/.+\/.+/,
  /tfc:wild_crop\/.+/,
  "mekanism:creative_fluid_tank",
  "mekanism:creative_chemical_tank",
  /immersivegeology:minecraft.*ore.*/,
  /immersivegeology:tfc.*ore.*/,
  "ae2:facade",
  /mekanism:.*ore.*/,
  /railways:track.*/,
  "create:track",
  /ae2:.*((axe)|(knife)|(shovel)|(hoe)|(sword)).*/,
  "immersiveengineering:pickaxe_steel",
  /minecraft:.*((axe)|(shovel)|(hoe)|(sword)).*/,
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
