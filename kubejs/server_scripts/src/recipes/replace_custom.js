//priority: -1
// ServerEvents.recipes((event) => {
//   let recipe_types = [{ type: "immersivepetroleum:hydrotreater" }];

//   event.forEachRecipe(recipe_types, (recipe) => {
//     let recipeJson = recipe.json;

//     switch (recipeJson.get("type").getAsString()) {
//       case "immersivepetroleum:hydrotreater":
//         if (
//           recipeJson.get("secondary_input") != undefined &&
//           recipeJson.get("secondary_input").get("tag").getAsString() ==
//             "minecraft:water"
//         ) {
//           recipeJson
//             .get("secondary_input")
//             .addProperty("tag", "tfc:fresh_water");
//           event.custom(recipeJson).id(recipe.getId());
//         }
//     }
//   });
// });
