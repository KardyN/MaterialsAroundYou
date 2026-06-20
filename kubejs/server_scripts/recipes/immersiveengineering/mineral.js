ServerEvents.recipes((event) => {
  let disabledMinerals = [
    { id: /immersiveengineering:.*mineral.*/ },
    { id: /tfc_ie_addon:mineral.+/ },
    { id: "createaddition:compat/immersiveengineering/sphalerite" },
  ];

  disabledMinerals.forEach((disabledRecipe) => {
    event.remove(disabledRecipe);
  });

  let mineralVeinsList = [
    {
      name: "aikinite",
      weight: 20,
      failChance: 0.1,
      ores: [
        { output: { id: "tfc:ore/small_tetrahedrite" }, chance: 0.15 },
        { output: { id: "tfc:ore/poor_tetrahedrite" }, chance: 0.11 },
        { output: { id: "tfc:ore/normal_tetrahedrite" }, chance: 0.07 },
        { output: { id: "tfc:ore/rich_tetrahedrite" }, chance: 0.04 },
        { output: { id: "tfc:ore/small_cassiterite" }, chance: 0.15 },
        { output: { id: "tfc:ore/poor_cassiterite" }, chance: 0.11 },
        { output: { id: "tfc:ore/normal_cassiterite" }, chance: 0.07 },
        { output: { id: "tfc:ore/rich_cassiterite" }, chance: 0.04 },
        { output: { id: "tfc:ore/small_limonite" }, chance: 0.08 },
        { output: { id: "tfc:ore/poor_limonite" }, chance: 0.05 },
        { output: { id: "tfc:ore/normal_limonite" }, chance: 0.04 },
        { output: { id: "tfc:ore/rich_limonite" }, chance: 0.02 },
        { output: { id: "tfc:ore/sulfur" }, chance: 0.07 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/marble" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/marble" }, chance: 0.15 },
        { output: { id: "tfc:rock/raw/andesite" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/andesite" }, chance: 0.15 },
      ],
    },
    {
      name: "auricupride",
      weight: 30,
      failChance: 0.1,
      ores: [
        { output: { id: "tfc:ore/small_native_gold" }, chance: 0.11 },
        { output: { id: "tfc:ore/poor_native_gold" }, chance: 0.09 },
        { output: { id: "tfc:ore/normal_native_gold" }, chance: 0.07 },
        { output: { id: "tfc:ore/rich_native_gold" }, chance: 0.05 },
        { output: { id: "tfc:ore/small_native_copper" }, chance: 0.26 },
        { output: { id: "tfc:ore/poor_native_copper" }, chance: 0.21 },
        { output: { id: "tfc:ore/normal_native_copper" }, chance: 0.14 },
        { output: { id: "tfc:ore/rich_native_copper" }, chance: 0.07 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/diorite" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/diorite" }, chance: 0.15 },
        { output: { id: "tfc:rock/raw/granite" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/granite" }, chance: 0.15 },
      ],
    },
    {
      name: "bituminous_coal",
      weight: 25,
      failChance: 0.05,
      ores: [
        { output: { id: "tfc:ore/bituminous_coal" }, chance: 0.8 },
        { output: { id: "tfc:ore/sulfur" }, chance: 0.2 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/basalt" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/basalt" }, chance: 0.15 },
        { output: { id: "tfc:rock/raw/chalk" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/chalk" }, chance: 0.15 },
      ],
    },
    {
      name: "chalcopyrite",
      weight: 20,
      failChance: 0.05,
      ores: [
        { output: { id: "tfc:ore/small_native_copper" }, chance: 0.22 },
        { output: { id: "tfc:ore/poor_native_copper" }, chance: 0.18 },
        { output: { id: "tfc:ore/normal_native_copper" }, chance: 0.12 },
        { output: { id: "tfc:ore/rich_native_copper" }, chance: 0.06 },
        { output: { id: "tfc:ore/small_hematite" }, chance: 0.15 },
        { output: { id: "tfc:ore/poor_hematite" }, chance: 0.09 },
        { output: { id: "tfc:ore/normal_hematite" }, chance: 0.06 },
        { output: { id: "tfc:ore/rich_hematite" }, chance: 0.03 },
        { output: { id: "tfc:ore/sulfur" }, chance: 0.09 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/dacite" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/dacite" }, chance: 0.15 },
        { output: { id: "tfc:rock/raw/slate" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/slate" }, chance: 0.15 },
      ],
    },
    {
      name: "chromite",
      weight: 20,
      failChance: 0.1,
      ores: [
        { output: { id: "firmalife:ore/small_chromite" }, chance: 0.26 },
        { output: { id: "firmalife:ore/poor_chromite" }, chance: 0.21 },
        { output: { id: "firmalife:ore/normal_chromite" }, chance: 0.14 },
        { output: { id: "firmalife:ore/rich_chromite" }, chance: 0.07 },
        { output: { id: "tfc:ore/small_magnetite" }, chance: 0.11 },
        { output: { id: "tfc:ore/poor_magnetite" }, chance: 0.09 },
        { output: { id: "tfc:ore/normal_magnetite" }, chance: 0.07 },
        { output: { id: "tfc:ore/rich_magnetite" }, chance: 0.05 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/basalt" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/basalt" }, chance: 0.15 },
        { output: { id: "tfc:rock/raw/gneiss" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/gneiss" }, chance: 0.15 },
      ],
    },
    {
      name: "cinnabar",
      weight: 15,
      failChance: 0.1,
      ores: [
        { output: { id: "tfc:ore/cinnabar" }, chance: 0.6 },
        { output: { id: "tfc:ore/sulfur" }, chance: 0.4 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/gabbro" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/gabbro" }, chance: 0.15 },
        { output: { id: "tfc:rock/raw/schist" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/schist" }, chance: 0.15 },
      ],
    },
    {
      name: "erlichmanite",
      weight: 10,
      failCHance: 0.1,
      ores: [
        { output: { id: "kubejs:ore/small_erlichmanite" }, chance: 0.26 },
        { output: { id: "kubejs:ore/poor_erlichmanite" }, chance: 0.21 },
        { output: { id: "kubejs:ore/normal_erlichmanite" }, chance: 0.14 },
        { output: { id: "kubejs:ore/rich_erlichmanite" }, chance: 0.07 },
        { output: { id: "firmalife:ore/small_chromite" }, chance: 0.11 },
        { output: { id: "firmalife:ore/poor_chromite" }, chance: 0.09 },
        { output: { id: "firmalife:ore/normal_chromite" }, chance: 0.07 },
        { output: { id: "firmalife:ore/rich_chromite" }, chance: 0.05 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/chalk" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/chalk" }, chance: 0.15 },
        { output: { id: "tfc:rock/raw/limestone" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/limestone" }, chance: 0.15 },
      ],
    },
    {
      name: "franklinite",
      weight: 25,
      failChance: 0.05,
      ores: [
        { output: { id: "tfc:ore/small_sphalerite" }, chance: 0.16 },
        { output: { id: "tfc:ore/poor_sphalerite" }, chance: 0.11 },
        { output: { id: "tfc:ore/normal_sphalerite" }, chance: 0.09 },
        { output: { id: "tfc:ore/rich_sphalerite" }, chance: 0.05 },
        { output: { id: "tfc:ore/small_hematite" }, chance: 0.27 },
        { output: { id: "tfc:ore/poor_hematite" }, chance: 0.18 },
        { output: { id: "tfc:ore/normal_hematite" }, chance: 0.09 },
        { output: { id: "tfc:ore/rich_hematite" }, chance: 0.05 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/shale" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/shale" }, chance: 0.15 },
        { output: { id: "tfc:rock/raw/conglomerate" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/conglomerate" }, chance: 0.15 },
      ],
    },
    {
      name: "galena",
      weight: 15,
      failChance: 0.05,
      ores: [
        { output: { id: "tfc_ie_addon:ore/small_galena" }, chance: 0.19 },
        { output: { id: "tfc_ie_addon:ore/poor_galena" }, chance: 0.14 },
        { output: { id: "tfc_ie_addon:ore/normal_galena" }, chance: 0.1 },
        { output: { id: "tfc_ie_addon:ore/rich_galena" }, chance: 0.05 },
        { output: { id: "tfc:ore/small_native_silver" }, chance: 0.12 },
        { output: { id: "tfc:ore/poor_native_silver" }, chance: 0.1 },
        { output: { id: "tfc:ore/normal_native_silver" }, chance: 0.07 },
        { output: { id: "tfc:ore/rich_native_silver" }, chance: 0.05 },
        { output: { id: "tfc:ore/sulfur" }, chance: 0.18 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/limestone" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/limestone" }, chance: 0.15 },
        { output: { id: "tfc:rock/raw/quartzite" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/quartzite" }, chance: 0.15 },
      ],
    },
    {
      name: "laterite",
      weight: 20,
      failChance: 0.05,
      ores: [
        { output: { id: "tfc_ie_addon:ore/small_bauxite" }, chance: 0.27 },
        { output: { id: "tfc_ie_addon:ore/poor_bauxite" }, chance: 0.19 },
        { output: { id: "tfc_ie_addon:ore/normal_bauxite" }, chance: 0.15 },
        { output: { id: "tfc_ie_addon:ore/rich_bauxite" }, chance: 0.08 },
        { output: { id: "tfc:ore/small_magnetite" }, chance: 0.11 },
        { output: { id: "tfc:ore/poor_magnetite" }, chance: 0.1 },
        { output: { id: "tfc:ore/normal_magnetite" }, chance: 0.06 },
        { output: { id: "tfc:ore/rich_magnetite" }, chance: 0.04 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/marble" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/marble" }, chance: 0.15 },
        { output: { id: "tfc:rock/raw/phyllite" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/phyllite" }, chance: 0.15 },
      ],
    },
    {
      name: "pentlandite",
      weight: 25,
      failChance: 0.05,
      ores: [
        { output: { id: "tfc:ore/small_hematite" }, chance: 0.17 },
        { output: { id: "tfc:ore/poor_hematite" }, chance: 0.12 },
        { output: { id: "tfc:ore/normal_hematite" }, chance: 0.09 },
        { output: { id: "tfc:ore/rich_hematite" }, chance: 0.05 },
        { output: { id: "tfc:ore/small_garnierite" }, chance: 0.17 },
        { output: { id: "tfc:ore/poor_garnierite" }, chance: 0.12 },
        { output: { id: "tfc:ore/normal_garnierite" }, chance: 0.09 },
        { output: { id: "tfc:ore/rich_garnierite" }, chance: 0.05 },
        { output: { id: "tfc:ore/sulfur" }, chance: 0.14 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/chalk" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/chalk" }, chance: 0.15 },
        { output: { id: "tfc:rock/raw/gneiss" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/gneiss" }, chance: 0.15 },
      ],
    },
    {
      name: "quartzite",
      weight: 20,
      failChance: 0.15,
      ores: [
        { output: { id: "tfc_ie_addon:mineral/quartz_block" }, chance: 0.5 },
        { output: { id: "tfc_ie_addon:mineral/quartz_shard" }, chance: 0.3 },
        { output: { id: "tfc:ore/sulfur" }, chance: 0.2 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/quartzite" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/quartzite" }, chance: 0.15 },
      ],
    },
    {
      name: "stannite",
      weight: 25,
      failChance: 0.1,
      ores: [
        { output: { id: "tfc:ore/small_bismuthinite" }, chance: 0.16 },
        { output: { id: "tfc:ore/poor_bismuthinite" }, chance: 0.1 },
        { output: { id: "tfc:ore/normal_bismuthinite" }, chance: 0.05 },
        { output: { id: "tfc:ore/rich_bismuthinite" }, chance: 0.03 },
        { output: { id: "tfc_ie_addon:ore/small_galena" }, chance: 0.16 },
        { output: { id: "tfc_ie_addon:ore/poor_galena" }, chance: 0.1 },
        { output: { id: "tfc_ie_addon:ore/normal_galena" }, chance: 0.05 },
        { output: { id: "tfc_ie_addon:ore/rich_galena" }, chance: 0.03 },
        { output: { id: "tfc:ore/small_malachite" }, chance: 0.09 },
        { output: { id: "tfc:ore/poor_malachite" }, chance: 0.06 },
        { output: { id: "tfc:ore/normal_malachite" }, chance: 0.05 },
        { output: { id: "tfc:ore/rich_malachite" }, chance: 0.03 },
        { output: { id: "tfc:ore/sulfur" }, chance: 0.09 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/marble" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/marble" }, chance: 0.15 },
        { output: { id: "tfc:rock/raw/andesite" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/andesite" }, chance: 0.15 },
      ],
    },
    {
      name: "uraninite",
      weight: 10,
      failChance: 0.15,
      ores: [
        { output: { id: "tfc_ie_addon:ore/small_uraninite" }, chance: 0.27 },
        { output: { id: "tfc_ie_addon:ore/poor_uraninite" }, chance: 0.19 },
        { output: { id: "tfc_ie_addon:ore/normal_uraninite" }, chance: 0.11 },
        { output: { id: "tfc_ie_addon:ore/rich_uraninite" }, chance: 0.08 },
        { output: { id: "tfc_ie_addon:ore/small_galena" }, chance: 0.13 },
        { output: { id: "tfc_ie_addon:ore/poor_galena" }, chance: 0.1 },
        { output: { id: "tfc_ie_addon:ore/normal_galena" }, chance: 0.08 },
        { output: { id: "tfc_ie_addon:ore/rich_galena" }, chance: 0.04 },
      ],
      spoils: [
        { output: { id: "tfc:rock/raw/diorite" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/diorite" }, chance: 0.15 },
        { output: { id: "tfc:rock/raw/chert" }, chance: 0.35 },
        { output: { id: "tfc:rock/gravel/chert" }, chance: 0.15 },
      ],
    },
  ];

  let recipes = [];

  mineralVeinsList.forEach((vein) => {
    recipes.push(
      MineralMixRecipeBuilder()
        .addId(`may:mineral/${vein.name}`)
        .addWeight(vein.weight)
        .addFailChance(vein.failChance)
        .addBiomePredicates(
          Object.prototype.hasOwnProperty(vein, "biome_predicates")
            ? vein.biome_predicates
            : [["minecraft:is_overworld"]]
        )
        .addOreList(vein.ores)
        .addSpoilList(vein.spoils)
        .build()
    );
  });

  recipes.forEach((recipe) => {
    recipe.type = "immersiveengineering:mineral_mix";
    event.custom(recipe).id(recipe.id);
  });
});

function MineralMixRecipeBuilder() {
  let recipe = {
    _id: "may:mineral/test_mineral",
    _ores: [],
    _spoils: [],
    _weight: 10,
    _fail_chance: 0.1,
    _biome_predicates: [],

    // Recipe namespace
    addId: function (id) {
      this._id = id;
      return this;
    },

    addOutput: function (output) {
      this._ores.push(output);
      return this;
    },

    addOreList: function (ores) {
      this._ores = ores;
      return this;
    },

    addSpoil: function (spoil) {
      this._spoils.push(spoil);
      return this;
    },

    addSpoilList: function (spoils) {
      this._spoils = spoils;
      return this;
    },

    // How rare the vein is // 5 rare ~ 15 uncommon ~ 30 common
    addWeight: function (weight) {
      this._weight = weight;
      return this;
    },

    // Yield bad product instead of ore // 0.05 rich ~ 0.15 poor ~ 0.5 traces
    addFailChance: function (failChance) {
      this._failChance = failChance;
      return this;
    },

    // Dimensions to spawn the vein in // Default: overworld
    addBiomePredicates: function (biome_predicates) {
      this._biome_predicates = biome_predicates;
      return this;
    },

    build: function () {
      return {
        id: this._id,
        ores: this._ores,
        spoils: this._spoils,
        weight: this._weight,
        failChance: this._fail_chance,
        biome_predicates: this._biome_predicates,
      };
    },
  };
  return recipe;
}
