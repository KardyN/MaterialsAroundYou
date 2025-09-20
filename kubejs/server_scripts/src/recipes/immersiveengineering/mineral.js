ServerEvents.recipes((event) => {
  let disabledMinerals = [
    { id: /immersiveengineering:mineral.+/ },
    { id: /tfc_ie_addon:mineral.+/ },
    { id: "createaddition:compat/immersiveengineering/sphalerite" },
  ];

  disabledMinerals.forEach((disabledRecipe) => {
    event.remove(disabledRecipe);
  });

  let recipes = [
    // MineralMixRecipeBuilder()
    //   .addId("may:mineral/chromite")
    //   .addWeight(25)
    //   .addFailChance(0.1)
    //   .addOutput(0.75, "firmalife:ore/small_chromite")
    //   .addOutput(0.6, "firmalife:ore/poor_chromite")
    //   .addOutput(0.4, "firmalife:ore/normal_chromite")
    //   .addOutput(0.2, "firmalife:ore/rich_chromite")
    //   .addOutput(0.3, "tfc:ore/small_magnetite")
    //   .addOutput(0.25, "tfc:ore/poor_magnetite")
    //   .addOutput(0.2, "tfc:ore/normal_magnetite")
    //   .addOutput(0.15, "tfc:ore/rich_magnetite")
    //   //
    //   .addSpoil(0.5, "tfc:rock/raw/marble")
    //   .addSpoil(0.2, "tfc:rock/gravel/marble")
    //   .addSpoil(0.5, "tfc:rock/raw/granite")
    //   .addSpoil(0.2, "tfc:rock/gravel/granite")
    //   .build(),
  ];

  global.mineralVeinsList.forEach((vein) => {
    recipes.push(
      MineralMixRecipeBuilder()
        .addId(`may:mineral/${vein.name}`)
        .addWeight(vein.ie.weight)
        .addFailChance(vein.ie.failChance)
        .addDimensions(
          Object.prototype.hasOwnProperty(vein.ie, "dimensions")
            ? vein.ie.dimensions
            : ["minecraft:overworld"]
        )
        .addOreList(vein.ie.ores)
        .addSpoilList(vein.ie.spoils)
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
    _dimensions: ["minecraft:overworld"],

    // Recipe namespace
    addId: function (id) {
      this._id = id;
      return this;
    },

    addOutput: function (chance, output) {
      output[0] == "#"
        ? this._ores.push({ chance: chance, output: { tag: output.slice(1) } })
        : this._ores.push({ chance: chance, output: { item: output } });
      return this;
    },

    addOreList: function (ores) {
      ores.forEach((entry) => {
        entry.ore[0] == "#"
          ? this._ores.push({
              chance: entry.chance,
              output: { tag: entry.ore.slice(1) },
            })
          : this._ores.push({
              chance: entry.chance,
              output: { item: entry.ore },
            });
      });
      return this;
    },

    addSpoil: function (chance, spoil) {
      spoil[0] == "#"
        ? this._spoils.push({ chance: chance, output: { tag: spoil.slice(1) } })
        : this._spoils.push({ chance: chance, output: { item: spoil } });
      return this;
    },

    addSpoilList: function (spoils) {
      spoils.forEach((entry) => {
        entry.spoil[0] == "#"
          ? this._spoils.push({
              chance: entry.chance,
              output: { tag: entry.spoil.slice(1) },
            })
          : this._spoils.push({
              chance: entry.chance,
              output: { item: entry.spoil },
            });
      });
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
    addDimensions: function (dimensions) {
      this._dimensions = dimensions;
      return this;
    },

    build: function () {
      return {
        id: this._id,
        ores: this._ores,
        spoils: this._spoils,
        weight: this._weight,
        failChance: this._fail_chance,
        dimensions: this._dimensions,
      };
    },
  };
  return recipe;
}
