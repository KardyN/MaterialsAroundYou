ServerEvents.recipes((event) => {
  let recipes = [];

  recipes.forEach((recipe) => {
    recipe.type = "immersiveengineering:mineral_mix";
    event.custom(recipe).id(recipe.id);
  });

  let disabledMinerals = [
    { id: "immersiveengineering:mineral/amethyst_crevasse" },
    { id: "immersiveengineering:mineral/ancient_seabed" },
    { id: "immersiveengineering:mineral/ancient_debris" },
    { id: "immersiveengineering:mineral/cooled_lava_tube" },
    { id: "immersiveengineering:mineral/hardened_clay_pan" },
    { id: "immersiveengineering:mineral/igneous_rock" },
    { id: "immersiveengineering:mineral/mephitic_quarzite" },
    { id: "immersiveengineering:mineral/silt" },
    { id: "immersiveengineering:mineral/nether_silt" },
    { id: "createaddition:compat/immersiveengineering/sphalerite" },
  ];

  disabledMinerals.forEach((disabledRecipe) => {
    event.remove(disabledRecipe);
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

    addSpoil: function (chance, spoil) {
      spoil[0] == "#"
        ? this._spoils.push({ chance: chance, output: { tag: spoil.slice(1) } })
        : this._spoils.push({ chance: chance, output: { item: spoil } });
      return this;
    },

    // How rare the vein is // ~10 rare - ~30 common
    addWeight: function (weight) {
      this._weight = weight;
      return this;
    },

    // how likely to yield bad product instead of ore // ~0.05 rich - ~0.15 poor
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
