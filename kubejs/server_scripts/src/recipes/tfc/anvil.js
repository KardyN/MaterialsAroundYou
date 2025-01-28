ServerEvents.recipes((event) => {
  let recipes = [
    {
      input: { item: "kubejs:raw_tin_bloom" },
      result: { item: "kubejs:refined_tin_bloom" },
      tier: 1,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "tfc:anvil/refined_tin_bloom",
    },
    {
      input: { item: "kubejs:refined_tin_bloom" },
      result: { item: "tfc:metal/ingot/tin" },
      tier: 1,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "tfc:anvil/tin_from_bloom",
    },
    {
      input: { item: "kubejs:raw_copper_bloom" },
      result: { item: "kubejs:refined_copper_bloom" },
      tier: 1,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "tfc:anvil/refined_copper_bloom",
    },
    {
      input: { item: "kubejs:refined_copper_bloom" },
      result: { item: "tfc:metal/ingot/copper" },
      tier: 1,
      rules: ["hit_last", "hit_second_last", "hit_third_last"],
      id: "tfc:anvil/copper_from_bloom",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:anvil";
    event.custom(recipe).id(recipe.id);
  });
});
