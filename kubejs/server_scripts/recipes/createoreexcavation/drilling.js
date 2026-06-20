//priority: 0

ServerEvents.recipes((event) => {
  event.remove({ type: "createoreexcavation:drilling" });

  let mineralVeinsList = [
    {
      name: "aikinite",
      outputs: [
        coeutil.processingOutput("tfc:ore/normal_tetrahedrite", 0.2),
        coeutil.processingOutput("tfc:ore/rich_tetrahedrite", 0.1),
        coeutil.processingOutput("tfc:ore/normal_cassiterite", 0.2),
        coeutil.processingOutput("tfc:ore/rich_cassiterite", 0.1),
        coeutil.processingOutput("tfc:ore/normal_limonite", 0.1),
        coeutil.processingOutput("tfc:ore/rich_limonite", 0.1),
        coeutil.processingOutput("tfc:ore/sulfur", 0.1),
        coeutil.processingOutput("tfc:rock/loose/marble", 0.05),
        coeutil.processingOutput("tfc:rock/loose/andesite", 0.05),
      ],
    },
    {
      name: "auricupride",
      outputs: [
        coeutil.processingOutput("tfc:ore/normal_native_copper", 0.3),
        coeutil.processingOutput("tfc:ore/rich_native_copper", 0.3),
        coeutil.processingOutput("tfc:ore/normal_native_gold", 0.2),
        coeutil.processingOutput("tfc:ore/rich_native_gold", 0.1),
        coeutil.processingOutput("tfc:rock/loose/diorite", 0.05),
        coeutil.processingOutput("tfc:rock/loose/granite", 0.05),
      ],
    },
    {
      name: "bituminous_coal",
      outputs: [
        coeutil.processingOutput("tfc:ore/bituminous_coal", 0.75),
        coeutil.processingOutput("tfc:ore/sulfur", 0.2),
        coeutil.processingOutput("tfc:rock/loose/basalt", 0.025),
        coeutil.processingOutput("tfc:rock/loose/chalk", 0.025),
      ],
    },
    {
      name: "chalcopyrite",
      outputs: [
        coeutil.processingOutput("tfc:ore/normal_native_copper", 0.3),
        coeutil.processingOutput("tfc:ore/rich_native_copper", 0.25),
        coeutil.processingOutput("tfc:ore/normal_hematite", 0.2),
        coeutil.processingOutput("tfc:ore/rich_hematite", 0.1),
        coeutil.processingOutput("tfc:ore/sulfur", 0.1),
        coeutil.processingOutput("tfc:rock/loose/dacite", 0.025),
        coeutil.processingOutput("tfc:rock/loose/slate", 0.025),
      ],
    },
    {
      name: "chromite",
      outputs: [
        coeutil.processingOutput("firmalife:ore/normal_chromite", 0.3),
        coeutil.processingOutput("firmalife:ore/rich_chromite", 0.3),
        coeutil.processingOutput("tfc:ore/normal_magnetite", 0.2),
        coeutil.processingOutput("tfc:ore/rich_magnetite", 0.1),
        coeutil.processingOutput("tfc:rock/loose/basalt", 0.05),
        coeutil.processingOutput("tfc:rock/loose/gneiss", 0.05),
      ],
    },
    {
      name: "cinnabar",
      outputs: [
        coeutil.processingOutput("tfc:ore/cinnabar", 0.6),
        coeutil.processingOutput("tfc:ore/sulfur", 0.3),
        coeutil.processingOutput("tfc:rock/loose/gabbro", 0.05),
        coeutil.processingOutput("tfc:rock/loose/schist", 0.05),
      ],
    },
    {
      name: "erlichmanite",
      outputs: [
        coeutil.processingOutput("kubejs:ore/normal_erlichmanite", 0.3),
        coeutil.processingOutput("kubejs:ore/rich_erlichmanite", 0.3),
        coeutil.processingOutput("firmalife:ore/normal_chromite", 0.2),
        coeutil.processingOutput("firmalife:ore/rich_chromite", 0.1),
        coeutil.processingOutput("tfc:rock/loose/chalk", 0.05),
        coeutil.processingOutput("tfc:rock/loose/limestone", 0.05),
      ],
    },
    {
      name: "franklinite",
      outputs: [
        coeutil.processingOutput("tfc:ore/normal_hematite", 0.35),
        coeutil.processingOutput("tfc:ore/rich_hematite", 0.3),
        coeutil.processingOutput("tfc:ore/normal_sphalerite", 0.2),
        coeutil.processingOutput("tfc:ore/rich_sphalerite", 0.1),
        coeutil.processingOutput("tfc:rock/loose/shale", 0.025),
        coeutil.processingOutput("tfc:rock/loose/conglomerate", 0.025),
      ],
    },
    {
      name: "galena",
      outputs: [
        coeutil.processingOutput("tfc_ie_addon:ore/normal_galena", 0.3),
        coeutil.processingOutput("tfc_ie_addon:ore/rich_galena", 0.2),
        coeutil.processingOutput("tfc:ore/normal_native_silver", 0.2),
        coeutil.processingOutput("tfc:ore/rich_native_silver", 0.15),
        coeutil.processingOutput("tfc:ore/sulfur", 0.1),
        coeutil.processingOutput("tfc:rock/loose/limestone", 0.025),
        coeutil.processingOutput("tfc:rock/loose/quartzite", 0.025),
      ],
    },
    {
      name: "laterite",
      outputs: [
        coeutil.processingOutput("tfc_ie_addon:ore/normal_bauxite", 0.35),
        coeutil.processingOutput("tfc_ie_addon:ore/rich_bauxite", 0.25),
        coeutil.processingOutput("tfc:ore/normal_magnetite", 0.25),
        coeutil.processingOutput("tfc:ore/rich_magnetite", 0.1),
        coeutil.processingOutput("tfc:rock/loose/marble", 0.025),
        coeutil.processingOutput("tfc:rock/loose/phyllite", 0.025),
      ],
    },
    {
      name: "pentlandite",
      outputs: [
        coeutil.processingOutput("tfc:ore/normal_hematite", 0.3),
        coeutil.processingOutput("tfc:ore/rich_hematite", 0.25),
        coeutil.processingOutput("tfc:ore/normal_garnierite", 0.2),
        coeutil.processingOutput("tfc:ore/rich_garnierite", 0.1),
        coeutil.processingOutput("tfc:ore/sulfur", 0.1),
        coeutil.processingOutput("tfc:rock/loose/chalk", 0.025),
        coeutil.processingOutput("tfc:rock/loose/gneiss", 0.025),
      ],
    },
    {
      name: "quartzite",
      outputs: [
        coeutil.processingOutput("tfc_ie_addon:mineral/quartz_block", 0.4),
        coeutil.processingOutput("tfc_ie_addon:mineral/quartz_shard", 0.3),
        coeutil.processingOutput("tfc:ore/sulfur", 0.15),
        coeutil.processingOutput("tfc:rock/loose/quartzite", 0.15),
      ],
    },
    {
      name: "stannite",
      outputs: [
        coeutil.processingOutput("tfc:ore/normal_bismuthinite", 0.25),
        coeutil.processingOutput("tfc:ore/rich_bismuthinite", 0.1),
        coeutil.processingOutput("tfc_ie_addon:ore/normal_galena", 0.2),
        coeutil.processingOutput("tfc_ie_addon:ore/rich_galena", 0.1),
        coeutil.processingOutput("tfc:ore/normal_malachite", 0.1),
        coeutil.processingOutput("tfc:ore/rich_malachite", 0.05),
        coeutil.processingOutput("tfc:ore/sulfur", 0.1),
        coeutil.processingOutput("tfc:rock/loose/marble", 0.05),
        coeutil.processingOutput("tfc:rock/loose/andesite", 0.05),
      ],
    },
    {
      name: "uraninite",
      outputs: [
        coeutil.processingOutput("tfc_ie_addon:ore/normal_uraninite", 0.35),
        coeutil.processingOutput("tfc_ie_addon:ore/rich_uraninite", 0.2),
        coeutil.processingOutput("tfc_ie_addon:ore/normal_galena", 0.2),
        coeutil.processingOutput("tfc_ie_addon:ore/rich_galena", 0.1),
        coeutil.processingOutput("tfc:rock/loose/diorite", 0.075),
        coeutil.processingOutput("tfc:rock/loose/chert", 0.075),
      ],
    },
  ];

  const defaultStress = 1024;
  const defaultTicks = 600;
  const defaultDrill = "#createoreexcavation:drills";
  const defaultFluid = "10x minecraft:lava";
  //Arguments: output item(s), ore vein id, extraction time in ticks at 32 RPM.

  mineralVeinsList.forEach((vein) => {
    event.recipes.createoreexcavation
      .drilling(
        vein.outputs,
        `kubejs:veins/${vein.name}`,
        Object.prototype.hasOwnProperty(vein, "ticks")
          ? vein.ticks
          : defaultTicks
      )
      .drill(
        Object.prototype.hasOwnProperty(vein, "drill")
          ? vein.drill
          : defaultDrill
      )
      .stress(
        Object.prototype.hasOwnProperty(vein, "stress")
          ? vein.stress
          : defaultStress
      )
      .fluid(
        Object.prototype.hasOwnProperty(vein, "fluid")
          ? vein.fluid
          : defaultFluid
      );
  });
});
