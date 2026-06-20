ServerEvents.recipes((event) => {
  let recipes = [
    {
      ingredient: { item: "kubejs:raw_tin_bloom" },
      result: { id: "tfc:metal/ingot/tin" },
      tier: 1,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/tin_from_bloom",
    },
    {
      ingredient: { item: "kubejs:raw_copper_bloom" },
      result: { id: "tfc:metal/ingot/copper" },
      tier: 1,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/copper_from_bloom",
    },
    {
      ingredient: { item: "tfc:metal/sheet/copper" },
      result: { id: "create:copper_backtank" },
      tier: 1,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/copper_backtank",
    },
    {
      ingredient: { item: "tfc:metal/sheet/wrought_iron" },
      result: { id: "create:chute" },
      tier: 3,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/chute",
    },
    {
      ingredient: { item: "tfc:metal/double_sheet/wrought_iron" },
      result: { id: "minecraft:cauldron" },
      tier: 3,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/cauldron",
    },
    {
      ingredient: { item: "tfc:metal/double_sheet/wrought_iron" },
      result: { id: "create:basin" },
      tier: 3,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/basin",
    },
    {
      ingredient: { item: "tfc:metal/rod/wrought_iron" },
      result: { id: "kubejs:metal/spindle_head/wrought_iron" },
      tier: 3,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/spindle_head/wrought_iron",
    },
    {
      ingredient: { item: "tfc:metal/rod/bronze" },
      result: { id: "kubejs:metal/spindle_head/bronze" },
      tier: 2,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/spindle_head/bronze",
    },
    {
      ingredient: { item: "tfc:metal/rod/copper" },
      result: { id: "kubejs:metal/spindle_head/copper" },
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
