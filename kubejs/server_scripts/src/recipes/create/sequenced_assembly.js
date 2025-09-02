ServerEvents.recipes((event) => {
  let recipes = [
    SequencedAssemblyRecipeBuilder()
      .addId("may:sequenced_assembly/track")
      .addIngridient("tfc_ie_addon:treated_wood_lumber")
      .addTransitionalItem("create:incomplete_track")
      .addSequenceStep("deploying", "#forge:stamens/wrought_iron")
      .addSequenceStep("deploying", "tfc_ie_addon:treated_wood_lumber")
      .addSequenceStep("deploying", "#forge:stamens/wrought_iron")
      .addSequenceStep("deploying", "tfc_items:handful_wrought_iron_screws")
      .addSequenceStep("pressing")
      .addSequenceStep("pressing")
      .addResult("railways:track_tfc_chestnut")
      .build(),

    SequencedAssemblyRecipeBuilder()
      .addId("may:sequenced_assembly/track_wide")
      .addIngridient("immersiveengineering:treated_wood_horizontal")
      .addTransitionalItem("create:incomplete_track")
      .addSequenceStep("cutting")
      .addSequenceStep("deploying", "#forge:stamens/wrought_iron")
      .addSequenceStep("deploying", "#forge:stamens/wrought_iron")
      .addSequenceStep("deploying", "tfc_items:handful_wrought_iron_screws")
      .addSequenceStep("pressing")
      .addSequenceStep("pressing")
      .addResult("railways:track_tfc_chestnut_wide")
      .build(),

    SequencedAssemblyRecipeBuilder()
      .addId("may:sequenced_assembly/track_narrow")
      .addIngridient("tfc_ie_addon:treated_wood_lumber")
      .addTransitionalItem("create:incomplete_track")
      .addSequenceStep("cutting")
      .addSequenceStep("deploying", "#forge:stamens/wrought_iron")
      .addSequenceStep("deploying", "#forge:stamens/wrought_iron")
      .addSequenceStep("deploying", "tfc_items:handful_wrought_iron_screws")
      .addSequenceStep("pressing")
      .addSequenceStep("pressing")
      .addResult("railways:track_tfc_chestnut_narrow")
      .build(),

    SequencedAssemblyRecipeBuilder()
      .addId("may:sequenced_assembly/precision_mechanism")
      .addIngridient("#forge:sheets/brass")
      .addTransitionalItem("create:incomplete_precision_mechanism")
      .addSequenceStep("pressing")
      .addSequenceStep("deploying", "tfc:brass_mechanisms")
      .addSequenceStep("deploying", "tfc:brass_mechanisms")
      .addSequenceStep("deploying", "tfc:brass_mechanisms")
      .addSequenceStep("deploying", "tfc_items:handful_wrought_iron_screws")
      .addSequenceStep("pressing")
      .addResult("create:precision_mechanism")
      .build(),
  ];

  recipes.forEach((recipe) => {
    recipe.type = "create:sequenced_assembly";
    event.custom(recipe).id(recipe.id);
  });
});

function SequencedAssemblyRecipeBuilder() {
  let recipe = {
    _id: "may:sequenced_assembly/test_recipe",
    _ingredient: {},
    _loops: 1,
    _transitionalItem: {},
    _sequence: [],
    _results: [],

    addId: function (id) {
      this._id = id;
      return this;
    },

    addIngridient: function (ingredient) {
      ingredient[0] == "#"
        ? (this._ingredient = { tag: ingredient.slice(1) })
        : (this._ingredient = { item: ingredient });
      return this;
    },

    addLoops: function (loops) {
      this._loops = loops;
      return this;
    },

    addTransitionalItem: function (item) {
      this._transitionalItem = { item: item };
      return this;
    },

    addSequenceStep: function (stepType, addedIngridient, amount, fluid, nbt) {
      switch (stepType) {
        case "deploying":
          this._sequence.push({
            type: `create:${stepType}`,
            ingredients: [
              { item: this._transitionalItem.item },
              { item: addedIngridient },
            ],
            results: [{ item: this._transitionalItem.item }],
          });
          break;
        case "filling":
          this._sequence.push({
            type: `create:${stepType}`,
            ingredients: [
              { item: this._transitionalItem.item },
              { amount: amount, fluid: fluid, nbt: nbt },
            ],
            results: [{ item: this._transitionalItem.item }],
          });
          break;
        case "pressing":
        case "cutting":
          this._sequence.push({
            type: `create:${stepType}`,
            ingredients: [{ item: this._transitionalItem.item }],
            results: [{ item: this._transitionalItem.item }],
          });
          break;
      }
      return this;
    },

    addResult: function (item, chance) {
      !chance
        ? this._results.push({ item: item })
        : this._results.push({ chance: chance, item: item });
      return this;
    },

    build: function () {
      return {
        id: this._id,
        ingredient: this._ingredient,
        loops: this._loops,
        transitionalItem: this._transitionalItem,
        sequence: this._sequence,
        results: this._results,
      };
    },
  };
  return recipe;
}
