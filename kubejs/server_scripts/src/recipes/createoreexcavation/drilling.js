ServerEvents.recipes((event) => {
  const defaultStress = 1024;
  const defaultTicks = 600;
  const defaultDrill = "#createoreexcavation:drills";
  const defaultFluid = { fluid: "minecraft:water", nbt: {}, amount: 500 };
  //Arguments: output item(s), ore vein id, extraction time in ticks at 32 RPM.

  event.recipes.createoreexcavation
    .drilling(
      [
        Item.of("tfc:ore/small_tetrahedrite").withChance(0.1522),
        Item.of("tfc:ore/poor_tetrahedrite").withChance(0.1087),
        Item.of("tfc:ore/normal_tetrahedrite").withChance(0.0652),
        Item.of("tfc:ore/rich_tetrahedrite").withChance(0.0435),
        Item.of("tfc:ore/small_cassiterite").withChance(0.1522),
        Item.of("tfc:ore/poor_cassiterite").withChance(0.1087),
        Item.of("tfc:ore/normal_cassiterite").withChance(0.0652),
        Item.of("tfc:ore/rich_cassiterite").withChance(0.0435),
        Item.of("tfc:ore/small_limonite").withChance(0.0761),
        Item.of("tfc:ore/poor_limonite").withChance(0.0543),
        Item.of("tfc:ore/normal_limonite").withChance(0.0543),
        Item.of("tfc:ore/rich_limonite").withChance(0.0217),
        Item.of("tfc:ore/sulfur").withChance(0.0652),
        Item.of("tfc:rock/raw/marble").withChance(0.3571),
        Item.of("tfc:rock/gravel/marble").withChance(0.1429),
        Item.of("tfc:rock/raw/andesite").withChance(0.3571),
        Item.of("tfc:rock/gravel/andesite").withChance(0.1429),
      ],
      "kubejs:veins/aikinite",
      defaultTicks
    )
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);

  event.recipes.createoreexcavation
    .drilling([], "kubejs:veins/auricupride", defaultTicks)
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);

  event.recipes.createoreexcavation
    .drilling([], "kubejs:veins/bituminous_coal", defaultTicks)
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);

  event.recipes.createoreexcavation
    .drilling([], "kubejs:veins/chalcopyrite", defaultTicks)
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);

  event.recipes.createoreexcavation
    .drilling([], "kubejs:veins/cinnabar", defaultTicks)
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);

  event.recipes.createoreexcavation
    .drilling([], "kubejs:veins/franklinite", defaultTicks)
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);

  event.recipes.createoreexcavation
    .drilling([], "kubejs:veins/galena", defaultTicks)
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);

  event.recipes.createoreexcavation
    .drilling([], "kubejs:veins/laterite", defaultTicks)
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);

  event.recipes.createoreexcavation
    .drilling([], "kubejs:veins/pentlandite", defaultTicks)
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);

  event.recipes.createoreexcavation
    .drilling([], "kubejs:veins/quartzite", defaultTicks)
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);

  event.recipes.createoreexcavation
    .drilling([], "kubejs:veins/stannite", defaultTicks)
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);

  event.recipes.createoreexcavation
    .drilling([], "kubejs:veins/uraninite", defaultTicks)
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);

  event.recipes.createoreexcavation
    .drilling([], "kubejs:veins/chromite", defaultTicks)
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);

  event.recipes.createoreexcavation
    .drilling([], "kubejs:veins/erlichmanite", defaultTicks)
    .drill(defaultDrill)
    .stress(defaultStress)
    .fluid(defaultFluid);
});
