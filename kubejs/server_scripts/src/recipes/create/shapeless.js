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
  ];

  recipes.forEach((recipe) => {
    event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  });
});
