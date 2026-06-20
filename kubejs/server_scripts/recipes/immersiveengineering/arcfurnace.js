ServerEvents.recipes((event) => {
  let recipes = [
    {
      additives: [
        {
          basePredicate: { item: "immersiveengineering:dust_coke" },
          count: 1,
        },
        { basePredicate: { item: "tfc:powder/flux" }, count: 1 },
      ],
      energy: 204800,
      input: {
        item: "kubejs:briquette/garnierite",
      },
      results: [
        {
          item: "tfc:metal/ingot/weak_steel",
        },
      ],
      slag: { item: "immersiveengineering:slag" },
      time: 400,
      id: "may:arc_furnace/garnierite_briquette_to_ferronickel_ingot",
    },
    {
      additives: [
        {
          basePredicate: { item: "immersiveengineering:dust_coke" },
          count: 1,
        },
        { basePredicate: { item: "tfc:powder/flux" }, count: 1 },
      ],
      energy: 204800,
      input: {
        item: "kubejs:briquette/chromite",
      },
      results: [
        {
          item: "tfc:metal/ingot/weak_blue_steel",
        },
      ],
      slag: { item: "immersiveengineering:slag" },
      time: 400,
      id: "may:arc_furnace/chromite_briquette_to_ferrochrome_ingot",
    },
    {
      additives: [
        {
          basePredicate: { item: "immersiveengineering:dust_coke" },
          count: 1,
        },
        { basePredicate: { item: "kubejs:powder/cryolite" }, count: 1 },
      ],
      energy: 204800,
      input: {
        item: "kubejs:briquette/bauxite",
      },
      results: [
        {
          item: "immersiveengineering:ingot_aluminum",
        },
      ],
      secondaries: [
        {
          chance: 0.5,
          output: {
            item: "kubejs:powder/cryolite",
          },
        },
      ],
      slag: { item: "immersiveengineering:slag" },
      time: 400,
      id: "may:arc_furnace/bauxite_briquette_to_aluminum_ingot",
    },
    {
      additives: [
        { basePredicate: { item: "tfc:metal/ingot/wrought_iron" }, count: 1 },
        { basePredicate: { item: "tfc:powder/flux" }, count: 1 },
      ],
      energy: 409600,
      input: {
        item: "immersiveengineering:ingot_aluminum",
      },
      results: [
        {
          basePredicate: {
            item: "tfc:metal/ingot/weak_red_steel",
          },
          count: 2,
        },
      ],
      slag: { item: "immersiveengineering:slag" },
      time: 800,
      id: "may:arc_furnace/aluminum_ingot_to_ferroaluminum_ingot",
    },
    {
      additives: [
        {
          basePredicate: { item: "immersiveengineering:dust_coke" },
          count: 1,
        },
        { basePredicate: { item: "tfc:powder/flux" }, count: 1 },
      ],
      energy: 204800,
      input: {
        item: "kubejs:briquette/tetrahedrite",
      },
      results: [
        {
          item: "tfc:metal/ingot/copper",
        },
      ],
      slag: { item: "immersiveengineering:slag" },
      time: 400,
      id: "may:arc_furnace/tetrahedrite_briquette_to_copper_ingot",
    },
    {
      additives: [
        {
          basePredicate: { item: "immersiveengineering:dust_coke" },
          count: 1,
        },
        {
          basePredicate: { item: "tfc:metal/ingot/weak_blue_steel" },
          count: 1,
        },
        { basePredicate: { item: "tfc:metal/ingot/nickel" }, count: 1 },
      ],
      energy: 1843200,
      input: {
        basePredicate: {
          item: "tfc:metal/ingot/steel",
        },
        count: 7,
      },
      results: [
        {
          basePredicate: { item: "firmalife:metal/ingot/stainless_steel" },
          count: 9,
        },
      ],
      slag: { item: "immersiveengineering:slag" },
      time: 3600,
      id: "may:arc_furnace/stainless_steel_block",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "immersiveengineering:arc_furnace";
    event.custom(recipe).id(recipe.id);
  });
});
