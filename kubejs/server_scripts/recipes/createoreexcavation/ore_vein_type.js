ServerEvents.recipes((event) => {
  let disabledVeins = [/createoreexcavation:ore_vein_type\/.+/];

  disabledVeins.forEach((vein) => {
    event.remove(vein);
  });

  let mineralVeinsList = [
    {
      name: "aikinite",
      icon: "tfc:ore/small_tetrahedrite",
      spacing: 128,
      separation: 16,
      salt: 714636,
      size: { min: 2, max: 4 },
    },
    {
      name: "auricupride",
      icon: "tfc:ore/small_native_gold",
      spacing: 128,
      separation: 16,
      salt: 1414646,
      size: { min: 2, max: 4 },
    },
    {
      name: "bituminous_coal",
      icon: "tfc:ore/bituminous_coal",
      spacing: 128,
      separation: 16,
      salt: 1736437,
      size: { min: 4, max: 6 },
    },
    {
      name: "chalcopyrite",
      icon: "tfc:ore/small_native_copper",
      spacing: 128,
      separation: 16,
      salt: 612050,
      size: { min: 2, max: 4 },
    },
    {
      name: "chromite",
      icon: "firmalife:ore/small_chromite",
      spacing: 128,
      separation: 16,
      salt: 2452761,
      size: { min: 2, max: 4 },
    },
    {
      name: "cinnabar",
      icon: "tfc:ore/cinnabar",
      spacing: 128,
      separation: 16,
      salt: 2673328,
      size: { min: 1, max: 2 },
    },
    {
      name: "erlichmanite",
      icon: "kubejs:ore/small_erlichmanite",
      spacing: 256,
      separation: 32,
      salt: 1534597,
      size: { min: 1, max: 2 },
    },
    {
      name: "franklinite",
      icon: "tfc:ore/small_sphalerite",
      spacing: 128,
      separation: 16,
      salt: 939917,
      size: { min: 2, max: 4 },
    },
    {
      name: "galena",
      icon: "tfc_ie_addon:ore/small_galena",
      spacing: 128,
      separation: 16,
      salt: 2451942,
      size: { min: 1, max: 2 },
    },
    {
      name: "laterite",
      icon: "tfc_ie_addon:ore/small_bauxite",
      spacing: 128,
      separation: 16,
      salt: 2928144,
      size: { min: 2, max: 4 },
    },
    {
      name: "pentlandite",
      icon: "tfc:ore/small_hematite",
      spacing: 128,
      separation: 16,
      salt: 1541942,
      size: { min: 2, max: 4 },
    },
    {
      name: "quartzite",
      icon: "tfc_ie_addon:mineral/quartz_shard",
      spacing: 128,
      separation: 16,
      salt: 2995423,
      size: { min: 4, max: 6 },
    },
    {
      name: "stannite",
      icon: "tfc:ore/small_bismuthinite",
      spacing: 128,
      separation: 16,
      salt: 2252746,
      size: { min: 2, max: 4 },
    },
    {
      name: "uraninite",
      icon: "tfc_ie_addon:ore/small_uraninite",
      spacing: 256,
      separation: 32,
      salt: 2129638,
      size: { min: 1, max: 2 },
    },
  ];

  // spacing: 512 very rare ~ 256 rare ~ 128 uncommon ~ 64 common
  // separation: 128 very rare ~ 64 rare ~ 16 uncommon ~ 8 common
  // salt: 500000 ~ 3000000
  // veinSize: 4-6 large ~ 2-4 normal ~ 1-2 small

  mineralVeinsList.forEach((vein) => {
    event.recipes.createoreexcavation
      .vein(String('{"translate": "vein.may.' + vein.name + '"}'), vein.icon)
      .id(`kubejs:veins/${vein.name}`)
      .placement(vein.spacing, vein.separation, vein.salt)
      .alwaysFinite()
      .veinSize(vein.size.min, vein.size.max);
  });

  event.recipes.createoreexcavation
    .vein('{"translate": "vein.may.purified_water"}', "minecraft:water_bucket")
    .id("kubejs:veins/purified_water")
    .placement(64, 16, 742424)
    .alwaysFinite()
    .veinSize(4, 6);

  event.recipes.createoreexcavation
    .vein('{"translate": "vein.may.lava"}', "minecraft:lava_bucket")
    .id("kubejs:veins/lava")
    .placement(128, 16, 2078209)
    .alwaysFinite()
    .veinSize(2, 4);

  event.recipes.createoreexcavation
    .vein('{"translate": "vein.may.oil"}', "pneumaticcraft:oil_bucket")
    .id("kubejs:veins/oil")
    .placement(256, 32, 2792419)
    .alwaysFinite()
    .veinSize(1, 2);
});
