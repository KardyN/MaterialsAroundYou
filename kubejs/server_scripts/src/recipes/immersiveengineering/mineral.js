ServerEvents.recipes((event) => {
  let recipes = [
    MineralMixRecipeBuilder()
      .addId("kubejs:testrecipe")
      .addOutput(0.5, "minecraft:diamond")
      .addSpoil(0.5, "minecraft:stone"),
  ];

  recipes.forEach((recipe) => {
    recipe.type = "immersiveengineering:mineral_mix";
    event.custom(recipe).id(recipe.id);
  });
});

function MineralMixRecipeBuilder() {
  let recipe = {
    _id: "",
    _ores: [],
    _spoils: [],
    _weight: 1,
    _fail_chance: 0,
    _dimensions: ["minecraft:overworld"],
    //_background: {},

    addId: function (id) {
      this._id = id;
      return this;
    },

    addOutput: function (chance, output) {
      output[0] == "#"
        ? this._ores.add({ chance: chance, output: { tag: output.slice(1) } })
        : this._ores.add({ chance: chance, output: { item: output } });
      return this;
    },

    addSpoil: function (chance, spoil) {
      output[0] == "#"
        ? this._ores.add({ chance: chance, output: { tag: spoil.slice(1) } })
        : this._ores.add({ chance: chance, output: { item: spoil } });
      return this;
    },

    addWeight: function (weight) {
      this._weight = weight;
      return this;
    },

    addFailChance: function (failChance) {
      this._failChance = failChance;
      return this;
    },

    addDimensions: function (dimensions) {
      this._dimensions = dimensions;
      return this;
    },

    // addBackground: function (id) {
    //   this._id = id;
    //   return this;
    // },
    build: function () {
      return {
        id: this._id,
        ores: this._ores,
        spoils: this._spoils,
        weight: this._id,
        failChance: this._fail_chance,
        dimensions: this._dimensions,
      };
    },
  };
  return recipe;
}
