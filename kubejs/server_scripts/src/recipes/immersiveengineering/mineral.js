ServerEvents.recipes((event) => {
  let recipes = [];

  recipes.forEach((recipe) => {
    recipe.type = "immersiveengineering:mineral_mix";
    event.custom(recipe).id(recipe.id);
  });
});

function MineralMixRecipeBuilder() {
  let recipe = {
    _id: "",
    _ores: {},
    _spoils: {},
    _weight: 1,
    _fail_chance: 0,
    _dimensions: ["minecraft:overworld"],
    //_background: {},

    addId: function (id) {
      this._id = id;
      return this;
    },

    addOutput: function (id) {
      this._id = id;
      return this;
    },

    addSpoil: function (id) {
      this._id = id;
      return this;
    },

    addWeight: function (weight) {
      this._weight = weight;
      return this;
    },

    addFailChance: function (failChance) {
      this._fail_chance = failChance;
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
  };
  return recipe;
}
