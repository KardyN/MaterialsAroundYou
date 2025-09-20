ServerEvents.recipes((event) => {
  let disabledVeins = [/createoreexcavation:ore_vein_type\/.+/];

  disabledVeins.forEach((vein) => {
    event.remove(vein);
  });

  // spacing: 512 very rare ~ 256 rare ~ 128 uncommon ~ 64 common
  // separation: 128 very rare ~ 64 rare ~ 16 uncommon ~ 8 common
  // salt: 500000 ~ 3000000
  // veinSize: 4-6 large ~ 2-4 normal ~ 1-2 small

  global.mineralVeinsList.forEach((vein) => {
    event.recipes.createoreexcavation
      .vein(
        String('{"translate": "vein.may.' + vein.name + '"}'),
        vein.ie.ores[0].ore
      )
      .id(`kubejs:veins/${vein.name}`)
      .placement(vein.coe.spacing, vein.coe.separation, vein.coe.salt)
      .alwaysFinite()
      .veinSize(vein.coe.size.min, vein.coe.size.max);
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
