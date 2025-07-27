ServerEvents.tags("item", (event) => {
  event.removeAllTagsFrom(/^minecraft:.+((log)|(wood)|(stem)|(hyphae))$/);
});
