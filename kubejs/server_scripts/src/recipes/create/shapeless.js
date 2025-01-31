ServerEvents.recipes((event) => {
  const recipes = [
    {
      output: "create:cogwheel",
      inputs: ["create:shaft", "kubejs:wooden_gear"],
      id: "create:shapeless/cogwheel",
    },
    {
      output: "create:large_cogwheel",
      inputs: ["create:shaft", "kubejs:large_wooden_gear"],
      id: "create:shapeless/large_cogwheel",
    },
    {
      output: "create:netherite_backtank",
      inputs: [
        "create:copper_backtank",
        "pneumaticcraft:compressed_iron_block",
      ],
      id: "create:shapeless/netherite_backtank",
    },
    {
      output: "create:hand_crank",
      inputs: [
        "create:andesite_alloy",
        "#tfc:lumber",
        "tfc:metal/rod/wrought_iron",
      ],
      id: "create:shapeless/hand_crank",
    },
  ];

  recipes.forEach((recipe) => {
    event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  });
});
