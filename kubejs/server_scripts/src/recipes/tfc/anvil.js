ServerEvents.recipes((event) => {
  let recipes = [
    {
      input: { item: "kubejs:raw_tin_bloom" },
      result: { item: "tfc:metal/ingot/tin" },
      tier: 1,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/tin_from_bloom",
    },
    {
      input: { item: "kubejs:raw_copper_bloom" },
      result: { item: "tfc:metal/ingot/copper" },
      tier: 1,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/copper_from_bloom",
    },
    {
      input: { item: "tfc:metal/sheet/copper" },
      result: { item: "create:copper_backtank" },
      tier: 1,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/copper_backtank",
    },
    {
      input: { item: "tfc:metal/sheet/wrought_iron" },
      result: { item: "create:chute" },
      tier: 3,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/chute",
    },
    {
      input: { item: "tfc:metal/double_sheet/wrought_iron" },
      result: { item: "minecraft:cauldron" },
      tier: 3,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/cauldron",
    },
    {
      input: { item: "tfc:metal/double_sheet/wrought_iron" },
      result: { item: "create:basin" },
      tier: 3,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/basin",
    },
    {
      input: { item: "tfc:metal/rod/wrought_iron" },
      result: { item: "kubejs:metal/spindle_head/wrought_iron" },
      tier: 3,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/spindle_head/wrought_iron",
    },
    {
      input: { item: "tfc:metal/rod/bronze" },
      result: { item: "kubejs:metal/spindle_head/bronze" },
      tier: 2,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/spindle_head/bronze",
    },
    {
      input: { item: "tfc:metal/rod/copper" },
      result: { item: "kubejs:metal/spindle_head/copper" },
      tier: 1,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/spindle_head/copper",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:anvil";
    event.custom(recipe).id(recipe.id);
  });
});
