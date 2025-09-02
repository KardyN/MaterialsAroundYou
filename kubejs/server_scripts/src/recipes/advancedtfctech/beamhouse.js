ServerEvents.recipes((event) => {
  let recipes = [
    // cleaning
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/large_clean_hide")
      .addInputItem("tfc:large_raw_hide")
      .addInputFluid("tfc:fresh_water", 4000)
      .addResult("kubejs:large_clean_hide")
      .addTime(400)
      .addEnergy(8000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/medium_clean_hide")
      .addInputItem("tfc:medium_raw_hide")
      .addInputFluid("tfc:fresh_water", 2000)
      .addResult("kubejs:medium_clean_hide")
      .addTime(300)
      .addEnergy(6000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/small_clean_hide")
      .addInputItem("tfc:small_raw_hide")
      .addInputFluid("tfc:fresh_water", 1000)
      .addResult("kubejs:small_clean_hide")
      .addTime(200)
      .addEnergy(4000)
      .build(),

    // soaking
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/large_soaked_hide")
      .addInputItem("kubejs:large_clean_hide")
      .addInputFluid("tfc:limewater", 500)
      .addResult("tfc:large_soaked_hide")
      .addTime(400)
      .addEnergy(8000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/medium_soaked_hide")
      .addInputItem("kubejs:medium_clean_hide")
      .addInputFluid("tfc:limewater", 400)
      .addResult("tfc:medium_soaked_hide")
      .addTime(300)
      .addEnergy(6000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/small_soaked_hide")
      .addInputItem("kubejs:small_clean_hide")
      .addInputFluid("tfc:limewater", 300)
      .addResult("tfc:small_soaked_hide")
      .addTime(200)
      .addEnergy(4000)
      .build(),

    //preparing w/ salt water
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/large_prepared_hide_salt_water")
      .addInputItem("tfc:large_scraped_hide")
      .addInputFluid("tfc:salt_water", 500)
      .addResult("tfc:large_prepared_hide")
      .addTime(400)
      .addEnergy(8000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/medium_prepared_hide_salt_water")
      .addInputItem("tfc:medium_scraped_hide")
      .addInputFluid("tfc:salt_water", 400)
      .addResult("tfc:medium_prepared_hide")
      .addTime(300)
      .addEnergy(6000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/small_prepared_hide_salt_water")
      .addInputItem("tfc:small_scraped_hide")
      .addInputFluid("tfc:salt_water", 300)
      .addResult("tfc:small_prepared_hide")
      .addTime(200)
      .addEnergy(4000)
      .build(),

    //preparing w/ brine
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/large_prepared_hide_brine")
      .addInputItem("tfc:large_scraped_hide")
      .addInputFluid("tfc:brine", 250)
      .addResult("tfc:large_prepared_hide")
      .addTime(400)
      .addEnergy(8000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/medium_prepared_hide_brine")
      .addInputItem("tfc:medium_scraped_hide")
      .addInputFluid("tfc:brine", 200)
      .addResult("tfc:medium_prepared_hide")
      .addTime(300)
      .addEnergy(6000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/small_prepared_hide_brine")
      .addInputItem("tfc:small_scraped_hide")
      .addInputFluid("tfc:brine", 150)
      .addResult("tfc:small_prepared_hide")
      .addTime(200)
      .addEnergy(4000)
      .build(),

    //tanning
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/large_tanned_hide")
      .addInputItem("tfc:large_prepared_hide")
      .addInputFluid("tfc:tannin", 500)
      .addResult("kubejs:large_tanned_hide")
      .addTime(400)
      .addEnergy(8000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/medium_tanned_hide")
      .addInputItem("tfc:medium_prepared_hide")
      .addInputFluid("tfc:tannin", 400)
      .addResult("kubejs:medium_tanned_hide")
      .addTime(300)
      .addEnergy(6000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/small_tanned_hide")
      .addInputItem("tfc:small_prepared_hide")
      .addInputFluid("tfc:tannin", 300)
      .addResult("kubejs:small_tanned_hide")
      .addTime(200)
      .addEnergy(4000)
      .build(),

    //waterproofing w/ tallow
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/large_waterproof_hide_tallow")
      .addInputItem("kubejs:large_tanned_hide")
      .addInputFluid("tfc:tallow", 250)
      .addResult("kubejs:large_waterproof_hide")
      .addTime(400)
      .addEnergy(8000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/medium_waterproof_hide_tallow")
      .addInputItem("kubejs:medium_tanned_hide")
      .addInputFluid("tfc:tallow", 200)
      .addResult("kubejs:medium_waterproof_hide")
      .addTime(300)
      .addEnergy(6000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/small_waterproof_hide_tallow")
      .addInputItem("kubejs:small_tanned_hide")
      .addInputFluid("tfc:tallow", 150)
      .addResult("kubejs:small_waterproof_hide")
      .addTime(200)
      .addEnergy(4000)
      .build(),

    //waterproofing w/ olive oil
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/large_waterproof_hide_olive_oil")
      .addInputItem("kubejs:large_tanned_hide")
      .addInputFluid("tfc:olive_oil", 500)
      .addResult("kubejs:large_waterproof_hide")
      .addTime(400)
      .addEnergy(8000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/medium_waterproof_hide_olive_oil")
      .addInputItem("kubejs:medium_tanned_hide")
      .addInputFluid("tfc:olive_oil", 400)
      .addResult("kubejs:medium_waterproof_hide")
      .addTime(300)
      .addEnergy(6000)
      .build(),
    BeamhouseRecipeBuilder()
      .addId("may:beamhouse/small_waterproof_hide_olive_oil")
      .addInputItem("kubejs:small_tanned_hide")
      .addInputFluid("tfc:olive_oil", 300)
      .addResult("kubejs:small_waterproof_hide")
      .addTime(200)
      .addEnergy(4000)
      .build(),
  ];

  recipes.forEach((recipe) => {
    recipe.type = "advancedtfctech:beamhouse";
    event.custom(recipe).id(recipe.id);
  });
});

function BeamhouseRecipeBuilder() {
  let recipe = {
    _id: "",
    _result: "",
    _inputItem: "",
    _inputFluid: "",
    _time: 20,
    _energy: 1000,

    addId: function (id) {
      this._id = id;
      return this;
    },

    addResult: function (itemStack) {
      if (isNaN(itemStack[0])) {
        this._result = {
          stack: { item: itemStack },
          modifiers: [{ type: "advancedtfctech:add_tag", tag: "machine_made" }],
        };
      } else {
        this._result = {
          stack: { item: itemStack.slice(3), count: parseInt(itemStack[0]) },
          modifiers: [{ type: "advancedtfctech:add_tag", tag: "machine_made" }],
        };
      }
      return this;
    },

    addInputItem: function (itemStack) {
      itemStack[0] == "#"
        ? (this._inputItem = { tag: itemStack.slice(1) })
        : (this._inputItem = { item: itemStack });
      return this;
    },

    addInputFluid: function (fluidTag, amount) {
      this._inputFluid = { tag: fluidTag, amount: amount };
      return this;
    },

    addTime: function (time) {
      this._time = time;
      return this;
    },

    addEnergy: function (energy) {
      this._energy = energy;
      return this;
    },

    build: function () {
      return {
        result: this._result,
        input: this._inputItem,
        fluid: this._inputFluid,
        time: this._time,
        energy: this._energy,
        id: this._id,
      };
    },
  };
  return recipe;
}
