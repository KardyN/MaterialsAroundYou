ServerEvents.recipes((event) => {
  let recipes = [
    {
      output: "immersiveengineering:ingot_hop_graphite",
      pattern: ["AAA", "AAA", "AAA"],
      key: {
        A: "immersiveengineering:dust_hop_graphite",
      },
      id: "may:shaped/ingot_hop_graphite",
    },
    {
      output: "immersiveengineering:light_engineering",
      pattern: ["BCB", "DAD", "BCB"],
      key: {
        A: "kubejs:light_frame",
        B: "tfc_items:copper_wire",
        C: "kubejs:vacuum_tube_logic_board",
        D: "kubejs:small_motor",
      },
      id: "may:shaped/light_engineering",
    },
    {
      output: "immersiveengineering:rs_engineering",
      pattern: ["BCB", "DAD", "BCB"],
      key: {
        A: "kubejs:light_frame",
        B: "tfc_items:electrum_wire",
        C: "immersiveengineering:component_electronic",
        D: "immersiveengineering:wirecoil_redstone",
      },
      id: "may:shaped/rs_engineering",
    },
    {
      output: "immersiveengineering:heavy_engineering",
      pattern: ["BCB", "DAE", "BCB"],
      key: {
        A: "kubejs:heavy_frame",
        B: "tfc_items:gold_wire",
        C: "kubejs:vacuum_tube_logic_board",
        D: "tfc:calendar_clock",
        E: "tfc:thermometer",
      },
      id: "may:shaped/heavy_engineering",
    },
    {
      output: "kubejs:chemical_engineering",
      pattern: ["BCB", "DAE", "BCB"],
      key: {
        A: "kubejs:chemical_frame",
        B: "tfc_items:gold_wire",
        C: "pneumaticcraft:printed_circuit_board",
        D: "tfc:calendar_clock",
        E: "tfc:thermometer",
      },
      id: "may:shaped/chemical_engineering",
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
