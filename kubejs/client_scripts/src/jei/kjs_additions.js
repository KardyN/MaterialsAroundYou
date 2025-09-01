// JEIAddedEvents.registerCategories((event) => {
//   const guiHelper = event.JEI_HELPERS.guiHelper;
//   event.custom("kubejs:mineral_mix", (category) => {
//     category
//       .background(guiHelper.createBlankDrawable(100, 50))
//       .icon(
//         guiHelper.createDrawableItemStack(
//           Item.of("immersiveengineering:excavator")
//         )
//       )
//       .isRecipeHandled((recipe) => {
//         return global["verifyRecipe"](category.jeiHelpers, recipe);
//       })
//       .handleLookup((builder, recipe, focuses) => {
//         global["handleLookup"](category.jeiHelpers, builder, recipe, focuses);
//       });
//   });
// });

// global["verifyRecipe"] = (jeiHelpers, recipe) => {
//   if (!recipe) return false;
//   if (!recipe.data) return false;
//   if (!recipe.data.type) return false;
//   if (!recipe.data.name) return false;

//   return !!recipe.data.description;
// };

// JEIAddedEvents.registerRecipes((event) => {
//   event.custom("kubejs:mineral_mix").add;
// });
