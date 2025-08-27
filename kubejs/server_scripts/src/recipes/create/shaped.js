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
        A: "#forge:metal/chain",
        B: "create:cogwheel",
        C: "create:andesite_casing",
      },
      id: "may:shaped/encased_chain_drive",
    },
    {
      output: "create:chain_conveyor",
      pattern: [" A ", "ABA", " A "],
      key: {
        A: "create:andesite_casing",
        B: "create:large_cogwheel",
      },
      id: "may:shaped/chain_conveyor",
    },
    {
      output: "create:water_wheel",
      pattern: ["BBB", "BAB", "BBB"],
      key: {
        A: "create:shaft",
        B: "tfc_ie_addon:treated_wood_lumber",
      },
      id: "may:shaped/water_wheel",
    },
    {
      output: "create:large_water_wheel",
      pattern: ["BCB", "CAC", "BCB"],
      key: {
        A: "create:shaft",
        B: "tfc_ie_addon:treated_wood_lumber",
        C: "immersiveengineering:treated_wood_horizontal",
      },
      id: "may:shaped/large_water_wheel",
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
    {
      output: Item.of("create:metal_bracket", 4),
      pattern: ["   ", " A ", "BCB"],
      key: {
        A: "#forge:rods",
        B: "create:andesite_alloy",
        C: "#forge:ingots",
      },
      id: "may:shaped/metal_bracket",
    },
    {
      output: Item.of("create:fluid_pipe", 6),
      pattern: ["AAA", "   ", "AAA"],
      key: {
        A: "tfc:metal/sheet/copper",
      },
      id: "may:shaped/fluid_pipe",
    },
    {
      output: Item.of("create:fluid_pipe", 6),
      pattern: ["A A", "A A", "A A"],
      key: {
        A: "tfc:metal/sheet/copper",
      },
      id: "may:shaped/fluid_pipe_vertical",
    },
    {
      output: "create:copper_valve_handle",
      pattern: ["AAA", " B "],
      key: {
        A: "tfc:metal/rod/copper",
        B: "create:shaft",
      },
      id: "may:shaped/copper_valve_handle",
    },
    {
      output: "create:fluid_tank",
      pattern: [" B ", "BAB", " B "],
      key: {
        A: "tfc:barrels",
        B: "tfc:metal/sheet/copper",
      },
      id: "may:shaped/fluid_tank",
    },
    {
      output: "create:hose_pulley",
      pattern: [" B ", "BAB", " B "],
      key: {
        A: "create:copper_casing",
        B: "#afc:ropes",
      },
      id: "may:shaped/hose_pulley",
    },
    {
      output: "create:item_drain",
      pattern: ["A", "B"],
      key: {
        A: "#may:bars",
        B: "create:copper_casing",
      },
      id: "may:shaped/item_drain",
    },
    {
      output: "create:belt_connector",
      pattern: ["AAA", "AAA"],
      key: {
        A: "afc:rubber_bar",
      },
      id: "may:shaped/belt_connector",
    },
    {
      output: "create:crushing_wheel",
      pattern: ["AAA", "ABA", "AAA"],
      key: {
        A: "tfc:metal/sheet/wrought_iron",
        B: "create:andesite_casing",
      },
      id: "may:shaped/crushing_wheel",
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
