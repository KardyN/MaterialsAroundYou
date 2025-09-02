ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredient: {
        item: "tfc_ie_addon:treated_wood_lumber",
      },
      loops: 1,
      results: [
        {
          item: "railways:track_tfc_chestnut",
        },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
            [
              {
                tag: "forge:stamens/wrought_iron",
              },
            ],
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
            [
              {
                item: "tfc_ie_addon:treated_wood_lumber",
              },
            ],
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
            [
              {
                tag: "forge:stamens/wrought_iron",
              },
            ],
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
            [
              {
                item: "tfc_items:handful_wrought_iron_screws",
              },
            ],
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:pressing",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:pressing",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
      ],
      transitionalItem: {
        item: "create:incomplete_track",
      },
      id: "may:sequenced_assembly/track",
    },
    ////////////////////////////////////////////////////////////////////////////
    {
      ingredient: {
        item: "immersiveengineering:treated_wood_horizontal",
      },
      loops: 1,
      results: [
        {
          item: "railways:track_tfc_chestnut_wide",
        },
      ],
      sequence: [
        {
          type: "create:cutting",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
            [
              {
                tag: "forge:stamens/wrought_iron",
              },
            ],
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
            [
              {
                tag: "forge:stamens/wrought_iron",
              },
            ],
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
            [
              {
                item: "tfc_items:handful_wrought_iron_screws",
              },
            ],
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:pressing",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:pressing",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
      ],
      transitionalItem: {
        item: "create:incomplete_track",
      },
      id: "may:sequenced_assembly/track_wide",
    },
    ////////////////////////////////////////////////////////////////////////////
    {
      ingredient: {
        item: "tfc_ie_addon:treated_wood_lumber",
      },
      loops: 1,
      results: [
        {
          item: "railways:track_tfc_chestnut_narrow",
        },
      ],
      sequence: [
        {
          type: "create:cutting",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
            [
              {
                tag: "forge:stamens/wrought_iron",
              },
            ],
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
            [
              {
                tag: "forge:stamens/wrought_iron",
              },
            ],
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
            [
              {
                item: "tfc_items:handful_wrought_iron_screws",
              },
            ],
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:pressing",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
        {
          type: "create:pressing",
          ingredients: [
            {
              item: "create:incomplete_track",
            },
          ],
          results: [
            {
              item: "create:incomplete_track",
            },
          ],
        },
      ],
      transitionalItem: {
        item: "create:incomplete_track",
      },
      id: "may:sequenced_assembly/track_narrow",
    },
    ////////////////////////////////////////////////////////////////////////////
    {
      ingredient: {
        tag: "forge:sheets/brass",
      },
      loops: 1,
      results: [
        {
          item: "create:precision_mechanism",
        },
      ],
      sequence: [
        {
          type: "create:pressing",
          ingredients: [
            {
              item: "create:incomplete_precision_mechanism",
            },
          ],
          results: [
            {
              item: "create:incomplete_precision_mechanism",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_precision_mechanism",
            },
            {
              item: "tfc:brass_mechanisms",
            },
          ],
          results: [
            {
              item: "create:incomplete_precision_mechanism",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_precision_mechanism",
            },
            {
              item: "tfc:brass_mechanisms",
            },
          ],
          results: [
            {
              item: "create:incomplete_precision_mechanism",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_precision_mechanism",
            },
            {
              item: "tfc:brass_mechanisms",
            },
          ],
          results: [
            {
              item: "create:incomplete_precision_mechanism",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "create:incomplete_precision_mechanism",
            },
            {
              item: "tfc_items:handful_wrought_iron_screws",
            },
          ],
          results: [
            {
              item: "create:incomplete_precision_mechanism",
            },
          ],
        },
        {
          type: "create:pressing",
          ingredients: [
            {
              item: "create:incomplete_precision_mechanism",
            },
          ],
          results: [
            {
              item: "create:incomplete_precision_mechanism",
            },
          ],
        },
      ],
      transitionalItem: {
        item: "create:incomplete_precision_mechanism",
      },
      id: "may:sequenced_assembly/precision_mechanism",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "create:sequenced_assembly";
    event.custom(recipe).id(recipe.id);
  });
});

function SequencedAssemblyRecipeBuilder() {
  return {
    _id: "",
    _ingredient: {},
    _loops: 0,
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

    addSequenceStep: function (stepType, addedIngridient) {
      this.addSequenceStep(stepType, addedIngridient, null, null, null);
      return this;
    },

    addSequenceStep: function (stepType, amount, fluid, nbt) {
      this.addSequenceStep(stepType, null, amount, fluid, nbt);
      return this;
    },

    addSequenceStep: function (stepType, addedIngridient, amount, fluid, nbt) {
      switch (stepType) {
        case "create:deploying":
          this._sequence.add({
            type: "create:deploying",
            ingredients: [
              { item: this._transitionalItem.item },
              { item: addedIngridient },
            ],
            results: [{ item: this._transitionalItem.item }],
          });
          break;
        case "create:filling":
          this._sequence.add({
            type: "create:filling",
            ingredients: [
              { item: this._transitionalItem.item },
              { amount: amount, fluid: fluid, nbt: nbt },
            ],
            results: [{ item: this._transitionalItem.item }],
          });
          break;
        case "create:pressing":
          this._sequence.add({
            type: "create:pressing",
            ingredients: [{ item: this._transitionalItem.item }],
            results: [{ item: this._transitionalItem.item }],
          });
          break;
      }
      return this;
    },

    addResult: function (chance, item) {
      item[0] == "#"
        ? this._results.add({ chance: chance, tag: item.slice(1) })
        : this._results.add({ chance: chance, item: item });
      return this;
    },

    build: function () {
      return {
        id: this._id,
        ingredient: this._ingredient,
        loops: this._loops,
        transitionalItem: this._transitionalItem,
        sequence: this._sequence,
        result: this._result,
      };
    },
  };
}
