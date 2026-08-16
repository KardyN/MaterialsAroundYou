ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredient: { item: "create:andesite_alloy" },
      result_fluid: { id: "kubejs:metal/bearing_alloy", amount: 50 },
      temperature: 460,
      id: "may:heating/andesite_alloy",
    },
    {
      ingredient: { item: "tfc:kaolin_clay" },
      result_item: { id: "tfc:powder/kaolinite" },
      temperature: 500,
      chance: 0.5,
      id: "may:heating/kaolin_clay",
    },
    {
      ingredient: { item: "kubejs:raw_tin_bloom" },
      result_fluid: { id: "tfc:metal/tin", amount: 100 },
      temperature: 200,
      id: "may:heating/raw_tin_bloom",
    },
    {
      ingredient: { item: "kubejs:raw_copper_bloom" },
      result_fluid: { id: "tfc:metal/copper", amount: 100 },
      temperature: 1080,
      id: "may:heating/raw_copper_bloom",
    },
    // {
    //   type: "tfc:heating",
    //   ingredient: { tag: "c:ingots/osmirite" },
    //   result_fluid: { amount: 100, id: "kubejs:metal/osmirite" },
    //   temperature: 2000.0,
    //   id: "may:heating/metal/ingot/osmirite",
    // },
    // {
    //   type: "tfc:heating",
    //   ingredient: { tag: "c:double_ingots/osmirite" },
    //   result_fluid: { amount: 200, id: "kubejs:metal/osmirite" },
    //   temperature: 2000.0,
    //   id: "may:heating/metal/double_ingot/osmirite",
    // },
    // {
    //   type: "tfc:heating",
    //   ingredient: { tag: "c:sheets/osmirite" },
    //   result_fluid: { amount: 200, id: "kubejs:metal/osmirite" },
    //   temperature: 2000.0,
    //   id: "may:heating/metal/sheet/osmirite",
    // },
  ];

  let oreList = [
    {
      name: "native_copper",
      mod: "tfc",
      temperature: 1080,
      fluid: "copper",
    },
    {
      name: "native_gold",
      mod: "tfc",
      temperature: 1060,
      fluid: "gold",
    },
    {
      name: "hematite",
      mod: "tfc",
      temperature: 1535,
    },
    {
      name: "native_silver",
      mod: "tfc",
      temperature: 961,
    },
    {
      name: "cassiterite",
      mod: "tfc",
      temperature: 1500,
    },
    {
      name: "bismuthinite",
      mod: "tfc",
      temperature: 270,
    },
    {
      name: "garnierite",
      mod: "tfc",
      temperature: 1453,
    },
    {
      name: "malachite",
      mod: "tfc",
      temperature: 200,
    },
    {
      name: "magnetite",
      mod: "tfc",
      temperature: 1535,
    },
    {
      name: "limonite",
      mod: "tfc",
      temperature: 1535,
    },
    {
      name: "sphalerite",
      mod: "tfc",
      temperature: 420,
    },
    {
      name: "tetrahedrite",
      mod: "tfc",
      temperature: 1080,
    },
    {
      name: "bauxite",
      mod: "tfc_ie_addon",
      temperature: 650,
    },
    {
      name: "galena",
      mod: "tfc_ie_addon",
      temperature: 500,
    },
    {
      name: "uraninite",
      mod: "tfc_ie_addon",
      temperature: 1250,
    },
    {
      name: "chromite",
      mod: "kubejs",
      temperature: 1250,
    },
  ];

  oreList.forEach((ore) => {
    recipes.push(
      {
        ingredient: { item: `${ore.mod}:powder/${ore.name}` },
        result_fluid: {
          id: ore.fluid
            ? `tfc:metal/${/[a-z]+$/.exec(ore.name)[0]}`
            : `kubejs:metal/${ore.name}`,
          amount: 5,
        },
        temperature: ore.temperature,
        id: `may:heating/powder/${ore.name}`,
      },
      {
        ingredient: { item: `kubejs:pile/${ore.name}` },
        result_fluid: {
          id: ore.fluid
            ? `tfc:metal/${/[a-z]+$/.exec(ore.name)[0]}`
            : `kubejs:metal/${ore.name}`,
          amount: 20,
        },
        temperature: ore.temperature,
        id: `may:heating/pile/${ore.name}`,
      },
      {
        ingredient: { item: `kubejs:briquette/${ore.name}` },
        result_fluid: {
          id: ore.fluid
            ? `tfc:metal/${/[a-z]+$/.exec(ore.name)[0]}`
            : `kubejs:metal/${ore.name}`,
          amount: 100,
        },
        temperature: ore.temperature,
        id: `may:heating/briquette/${ore.name}`,
      }
    );
  });

  recipes.forEach((recipe) => {
    recipe.type = "tfc:heating";
    event.custom(recipe).id(recipe.id);
  });
});
