ServerEvents.recipes((event) => {
  let recipes = [
    {
      output: Item.of("tfc:fire_bricks", 4),
      pattern: ["ABA", "BAB", "ABA"],
      key: {
        A: "tfc:ceramic/fire_brick",
        B: "tfc:mortar",
      },
      id: "may:shaped/fire_bricks",
    },
    {
      output: "kubejs:metal/spindle/wrought_iron",
      pattern: ["A", "B"],
      key: {
        A: "kubejs:metal/spindle_head/wrought_iron",
        B: "#c:rods/wooden",
      },
      id: "may:shaped/spindle/wrought_iron",
    },
    {
      output: "kubejs:metal/spindle/bronze",
      pattern: ["A", "B"],
      key: {
        A: "kubejs:metal/spindle_head/bronze",
        B: "#c:rods/wooden",
      },
      id: "may:shaped/spindle/bronze",
    },
    {
      output: "kubejs:metal/spindle/copper",
      pattern: ["A", "B"],
      key: {
        A: "kubejs:metal/spindle_head/copper",
        B: "#c:rods/wooden",
      },
      id: "may:shaped/spindle/copper",
    },
    {
      output: "tfc:bloomery",
      pattern: ["A A", "A A", "A A"],
      key: {
        A: "tfc:metal/double_sheet/copper",
      },
      id: "may:shaped/bloomery",
    },
    {
      output: "immersiveengineering:hammer",
      pattern: ["A", "B"],
      key: {
        A: "tfc_ie_addon:tool_head/ie_hammer",
        B: "immersiveengineering:stick_treated",
      },
      id: "may:shaped/ie_hammer",
    },
    {
      output: "kubejs:metal/fishing_rod/osmirite",
      pattern: ["  A", " AC", "ABC"],
      key: {
        A: "immersiveengineering:stick_treated",
        B: "kubejs:metal/fish_hook/osmirite",
        C: "#c:strings",
      },
      id: "may:shaped/metal/fishing_rod/osmirite",
    },
    {
      output: "kubejs:metal/propick/osmirite",
      pattern: ["ABC", "EDE", "E E"],
      key: {
        A: "kubejs:metal/propick_head/osmirite",
        B: "kubejs:metal/prospector_hammer_head/osmirite",
        C: "kubejs:metal/prospector_drill_head/osmirite",
        D: "kubejs:metal/mineral_prospector_head/osmirite",
        E: "immersiveengineering:stick_treated",
      },
      id: "may:shaped/metal/propick/osmirite",
    },
    {
      output: "kubejs:metal/anvil/osmirite",
      pattern: ["AAA", " A ", "AAA"],
      key: {
        A: "kubejs:metal/double_ingot/osmirite",
      },
      id: "may:shaped/metal/anvil/osmirite",
    },
  ];

  [
    "pickaxe",
    "axe",
    "shovel",
    "hoe",
    "chisel",
    "hammer",
    "saw",
    "knife",
    "scythe",
    "javelin",
    "sword",
    "mace",
  ].forEach((tool) => {
    recipes.push({
      output: `kubejs:metal/${tool}/osmirite`,
      pattern: ["A", "B"],
      key: {
        A: `kubejs:metal/${tool}_head/osmirite`,
        B: "immersiveengineering:stick_treated",
      },
      id: `may:shaped/metal/${tool}/osmirite`,
    });
  });

  global.woodList.forEach((wood) => {
    recipes.push(
      {
        output: wood.splice(4, "wood/clutch/"),
        pattern: [" C ", "BAB", "   "],
        key: {
          A: wood.splice(4, "wood/encased_axle/"),
          B: "kubejs:wooden_gear",
          C: "tfc:glue",
        },
        id: "may:shaped/clutch/" + wood.slice(4),
      },
      {
        output: wood.splice(4, "wood/gear_box/"),
        pattern: ["CB ", "BAB", " B "],
        key: {
          A: wood.splice(4, "wood/encased_axle/"),
          B: "kubejs:wooden_gear",
          C: "tfc:glue",
        },
        id: "may:shaped/gear_box/" + wood.slice(4),
      }
    );
  });

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
