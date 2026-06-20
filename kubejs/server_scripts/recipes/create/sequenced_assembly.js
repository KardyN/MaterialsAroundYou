ServerEvents.recipes((event) => {
  let recipes = [
    SequencedAssemblyRecipeBuilder()
      .addId("may:sequenced_assembly/track")
      .addIngridient("tfc_ie_addon:treated_wood_lumber")
      .addTransitionalItem("create:incomplete_track")
      .addSequenceStep("deploying", "#c:stamens/wrought_iron")
      .addSequenceStep("deploying", "tfc_ie_addon:treated_wood_lumber")
      .addSequenceStep("deploying", "#c:stamens/wrought_iron")
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
      .addSequenceStep("deploying", "#c:stamens/wrought_iron")
      .addSequenceStep("deploying", "#c:stamens/wrought_iron")
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
      .addSequenceStep("deploying", "#c:stamens/wrought_iron")
      .addSequenceStep("deploying", "#c:stamens/wrought_iron")
      .addSequenceStep("deploying", "tfc_items:handful_wrought_iron_screws")
      .addSequenceStep("pressing")
      .addSequenceStep("pressing")
      .addResult("railways:track_tfc_chestnut_narrow")
      .build(),

    SequencedAssemblyRecipeBuilder()
      .addId("may:sequenced_assembly/precision_mechanism")
      .addIngridient("tfc:metal/sheet/brass")
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
    _transitional_item: {},
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
      this._transitional_item = { id: item };
      return this;
    },

    addSequenceStep: function (stepType, addedIngridient, amount, fluid, nbt) {
      switch (stepType) {
        case "deploying":
          this._sequence.push({
            type: `create:${stepType}`,
            ingredients: [
              { item: this._transitional_item.id },
              addedIngridient[0] == "#"
                ? { tag: addedIngridient.slice(1) }
                : { item: addedIngridient },
            ],
            results: [{ id: this._transitional_item.id }],
          });
          break;
        case "filling":
          this._sequence.push({
            type: `create:${stepType}`,
            ingredients: [
              { item: this._transitional_item.id },
              { amount: amount, fluid: fluid, nbt: nbt },
            ],
            results: [{ id: this._transitional_item.id }],
          });
          break;
        case "pressing":
        case "cutting":
          this._sequence.push({
            type: `create:${stepType}`,
            ingredients: [{ item: this._transitional_item.id }],
            results: [{ id: this._transitional_item.id }],
          });
          break;
      }
      return this;
    },

    addResult: function (item, chance) {
      !chance
        ? this._results.push({ id: item })
        : this._results.push({ chance: chance, id: item });
      return this;
    },

    build: function () {
      return {
        id: this._id,
        ingredient: this._ingredient,
        loops: this._loops,
        transitional_item: this._transitional_item,
        sequence: this._sequence,
        results: this._results,
      };
    },
  };
  return recipe;
}
