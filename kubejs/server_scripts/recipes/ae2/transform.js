ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredients: [
        {
          item: "ae2:charged_certus_quartz_crystal",
        },
        {
          item: "ae2:certus_quartz_dust",
        },
      ],
      result: {
        count: 2,
        id: "ae2:certus_quartz_crystal",
      },
      id: "may:transform/certus_quartz_crystals",
    },
    {
      ingredients: [
        {
          item: "ae2:charged_certus_quartz_crystal",
        },
        {
          item: "ae2:damaged_budding_quartz",
        },
      ],
      result: {
        id: "ae2:chipped_budding_quartz",
      },
      id: "may:transform/chipped_budding_quartz",
    },
    {
      ingredients: [
        {
          item: "ae2:charged_certus_quartz_crystal",
        },
        {
          item: "ae2:quartz_block",
        },
      ],
      result: {
        id: "ae2:damaged_budding_quartz",
      },
      id: "may:transform/damaged_budding_quartz",
    },
    {
      ingredients: [
        {
          item: "ae2:charged_certus_quartz_crystal",
        },
        {
          item: "ae2:chipped_budding_quartz",
        },
      ],
      result: {
        id: "ae2:flawed_budding_quartz",
      },
      id: "may:transform/flawed_budding_quartz",
    },
    {
      ingredients: [
        {
          item: "ae2:charged_certus_quartz_crystal",
        },
        {
          item: "ae2:fluix_dust",
        },
      ],
      result: {
        id: "ae2:fluix_crystal",
      },
      id: "may:transform/fluix_crystals",
    },
    {
      ingredients: [
        {
          item: "ae2:charged_certus_quartz_crystal",
        },
        {
          item: "minecraft:redstone",
        },
        {
          tag: "c:gems/quartz",
        },
      ],
      result: {
        count: 2,
        id: "ae2:fluix_crystal",
      },
      id: "may:transform/fluix_crystal",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "ae2:transform";
    recipe.circumstance = {
      type: "fluid",
      tag: "tfc:fresh_water",
    };
    event.custom(recipe).id(recipe.id);
  });
});
