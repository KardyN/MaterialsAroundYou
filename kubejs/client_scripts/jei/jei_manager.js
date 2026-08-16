// priority: 100

RecipeViewerEvents.addEntries("item", (event) => {
  jei.items.add.forEach((added_item) => {
    event.add(added_item);
  });
});

RecipeViewerEvents.removeEntries("item", (event) => {
  jei.items.remove.forEach((removed_item) => {
    event.remove(removed_item);
  });
});

RecipeViewerEvents.removeEntries("fluid", (event) => {
  jei.fluids.remove.forEach((removed_fluid) => {
    event.remove(removed_fluid);
  });
});
