ServerEvents.recipes((event) => {
  let disabledVeins = [/createoreexcavation:ore_vein_type\/.+/];

  disabledVeins.forEach((vein) => {
    event.remove(vein);
  });

  // spacing: 512 very rare ~ 256 rare ~ 128 uncommon ~ 64 common
  // separation: 128 very rare ~ 64 rare ~ 16 uncommon ~ 8 common
  // salt: 500000 ~ 3000000
  // veinSize: 4-6 large ~ 2-4 normal ~ 1-2 small

  event.recipes.createoreexcavation
    .vein('{"translate": "vein.may.aikinite"}', "tfc:ore/small_cassiterite")
    .id("kubejs:veins/aikinite")
    .placement(128, 16, 714636)
    .alwaysFinite()
    .veinSize(2, 4);

  event.recipes.createoreexcavation
    .vein('{"translate": "vein.may.auricupride"}', "tfc:ore/small_native_gold")
    .id("kubejs:veins/auricupride")
    .placement(128, 16, 1414646)
    .alwaysFinite()
    .veinSize(1, 2);

  event.recipes.createoreexcavation
    .vein(
      '{"translate": "vein.may.bituminous_coal"}',
      "tfc:ore/bituminous_coal"
    )
    .id("kubejs:veins/bituminous_coal")
    .placement(128, 16, 1736437)
    .alwaysFinite()
    .veinSize(4, 6);

  event.recipes.createoreexcavation
    .vein(
      '{"translate": "vein.may.chalcopyrite"}',
      "tfc:ore/small_native_copper"
    )
    .id("kubejs:veins/chalcopyrite")
    .placement(128, 16, 612050)
    .alwaysFinite()
    .veinSize(2, 4);

  event.recipes.createoreexcavation

    .vein('{"translate": "vein.may.cinnabar"}', "tfc:ore/cinnabar")
    .id("kubejs:veins/cinnabar")
    .placement(128, 16, 2673328)
    .alwaysFinite()
    .veinSize(1, 2);

  event.recipes.createoreexcavation
    .vein('{"translate": "vein.may.franklinite"}', "tfc:ore/small_sphalerite")
    .id("kubejs:veins/franklinite")
    .placement(128, 16, 939917)
    .alwaysFinite()
    .veinSize(2, 4);

  event.recipes.createoreexcavation
    .vein('{"translate": "vein.may.galena"}', "tfc_ie_addon:ore/small_galena")
    .id("kubejs:veins/galena")
    .placement(128, 16, 2451942)
    .alwaysFinite()
    .veinSize(1, 2);

  event.recipes.createoreexcavation
    .vein('{"translate": "vein.may.laterite"}', "tfc_ie_addon:ore/poor_bauxite")
    .id("kubejs:veins/laterite")
    .placement(128, 16, 2928144)
    .alwaysFinite()
    .veinSize(2, 4);

  event.recipes.createoreexcavation
    .vein('{"translate": "vein.may.pentlandite"}', "tfc:ore/small_garnierite")
    .id("kubejs:veins/pentlandite")
    .placement(128, 16, 1541942)
    .alwaysFinite()
    .veinSize(2, 4);

  event.recipes.createoreexcavation
    .vein(
      '{"translate": "vein.may.quartzite"}',
      "tfc_ie_addon:mineral/quartz_shard"
    )
    .id("kubejs:veins/quartzite")
    .placement(128, 16, 2995423)
    .alwaysFinite()
    .veinSize(4, 6);

  event.recipes.createoreexcavation
    .vein('{"translate": "vein.may.stannite"}', "tfc:ore/small_bismuthinite")
    .id("kubejs:veins/stannite")
    .placement(128, 16, 2252746)
    .alwaysFinite()
    .veinSize(2, 4);

  event.recipes.createoreexcavation
    .vein(
      '{"translate": "vein.may.uraninite"}',
      "tfc_ie_addon:ore/small_uraninite"
    )
    .id("kubejs:veins/uraninite")
    .placement(256, 32, 2129638)
    .alwaysFinite()
    .veinSize(1, 2);

  event.recipes.createoreexcavation
    .vein('{"translate": "vein.may.chromite"}', "firmalife:ore/small_chromite")
    .id("kubejs:veins/chromite")
    .placement(128, 16, 2452761)
    .alwaysFinite()
    .veinSize(2, 4);

  event.recipes.createoreexcavation
    .vein(
      '{"translate": "vein.may.erlichmanite"}',
      "kubejs:ore/small_erlichmanite"
    )
    .id("kubejs:veins/erlichmanite")
    .placement(256, 32, 1534597)
    .alwaysFinite()
    .veinSize(1, 2);

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
