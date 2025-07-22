ServerEvents.recipes((event) => {
  let recipes = [
    {
      additives: [
        {
          base_ingredient: { item: "immersiveengineering:dust_coke" },
          count: 1,
        },
        { base_ingredient: { item: "tfc:powder/flux" }, count: 1 },
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
      id: "immersiveengineering:arc_furnace/arc_garnierite_briquette_to_ferronickel_ingot",
    },
    {
      additives: [
        {
          base_ingredient: { item: "immersiveengineering:dust_coke" },
          count: 1,
        },
        { base_ingredient: { item: "tfc:powder/flux" }, count: 1 },
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
      id: "immersiveengineering:arc_furnace/arc_chromite_briquette_to_ferrochrome_ingot",
    },
    {
      additives: [
        {
          base_ingredient: { item: "immersiveengineering:dust_coke" },
          count: 1,
        },
        { base_ingredient: { item: "kubejs:powder/cryolite" }, count: 1 },
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
      id: "immersiveengineering:arc_furnace/arc_bauxite_briquette_to_aluminum_ingot",
    },
    {
      additives: [
        { base_ingredient: { item: "tfc:metal/ingot/wrought_iron" }, count: 1 },
        { base_ingredient: { item: "tfc:powder/flux" }, count: 1 },
      ],
      energy: 204800,
      input: {
        item: "immersiveengineering:ingot_aluminum",
      },
      results: [
        {
          item: "tfc:metal/ingot/weak_red_steel",
        },
      ],
      slag: { item: "immersiveengineering:slag" },
      time: 400,
      id: "immersiveengineering:arc_furnace/arc_aluminum_ingot_to_ferroaluminum_ingot",
    },
    {
      additives: [
        {
          base_ingredient: { item: "immersiveengineering:dust_coke" },
          count: 1,
        },
        { base_ingredient: { item: "tfc:powder/flux" }, count: 1 },
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
      id: "immersiveengineering:arc_furnace/arc_tetrahedrite_briquette_to_copper_ingot",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "immersiveengineering:arc_furnace";
    event.custom(recipe).id(recipe.id);
  });
});
