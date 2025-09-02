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
