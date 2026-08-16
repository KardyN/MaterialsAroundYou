ServerEvents.recipes((event) => {
  const recipes = [
    // {
    //   output: "ae2:cable_anchor",
    //   pattern: ["CC ", "CB ", " A "],
    //   key: {
    //     A: "#c:tools/saw",
    //     B: "create:cogwheel",
    //     C: "tfc:brass_mechanisms",
    //   },
    //   id: "may:shaped/wrench",
    // },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
