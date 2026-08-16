ServerEvents.recipes((event) => {
  const recipes = [
    {
      output: Item.of("ae2:cable_anchor", 2),
      inputs: ["#c:tools/saw", "tfc:metal/rod/cast_iron"],
      id: "may:shapeless/cable_anchor",
    },
  ];

  recipes.forEach((recipe) => {
    event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  });
});
