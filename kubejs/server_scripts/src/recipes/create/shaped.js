ServerEvents.recipes((event) => {
  const recipes = [
    {
      output: "create:wrench",
      pattern: ["CC ", "CB ", " A "],
      key: {
        A: "immersiveengineering:stick_treated",
        B: "create:cogwheel",
        C: "tfc:brass_mechanisms",
      },
      id: "may:shaped/wrench",
    },
    {
      output: "create:clutch",
      pattern: [" C ", "BAB", " D "],
      key: {
        A: "create:andesite_casing",
        B: "create:cogwheel",
        C: "create:andesite_alloy",
        D: "create:shaft",
      },
      id: "may:shaped/clutch",
    },
    {
      output: "create:gearshift",
      pattern: [" C ", "BAB", " B "],
      key: {
        A: "create:andesite_casing",
        B: "create:cogwheel",
        C: "create:andesite_alloy",
      },
      id: "may:shaped/gearshift",
    },
    {
      output: "create:encased_chain_drive",
      pattern: ["A", "B", "C"],
      key: {
        A: "tfc:metal/chain/wrought_iron",
        B: "create:cogwheel",
        C: "create:andesite_casing",
      },
      id: "may:shaped/encased_chain_drive",
    },
    {
      output: "create:nozzle",
      pattern: [" A ", "BBB", " A "],
      key: {
        A: "create:sail_frame",
        B: "tfc:silk_cloth",
      },
      id: "may:shaped/nozzle",
    },
    {
      output: "create:turntable",
      pattern: ["A", "B"],
      key: {
        A: "#tfc:lumber",
        B: "create:andesite_alloy",
      },
      id: "may:shaped/turntable",
    },
    {
      output: "create:millstone",
      pattern: ["A", "B", "C"],
      key: {
        A: "create:cogwheel",
        B: "tfc:handstone",
        C: "tfc:quern",
      },
      id: "may:shaped/millstone",
    },
    {
      output: "create:mechanical_press",
      pattern: ["A", "B", "C"],
      key: {
        A: "create:shaft",
        B: "create:andesite_casing",
        C: "tfc:metal/double_ingot/wrought_iron",
      },
      id: "may:shaped/mechanical_press",
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
