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
      input: { item: "tfc:metal/double_sheet/wrought_iron" },
      result: { item: "create:chute" },
      tier: 3,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "may:anvil/chute",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:anvil";
    event.custom(recipe).id(recipe.id);
  });
});
