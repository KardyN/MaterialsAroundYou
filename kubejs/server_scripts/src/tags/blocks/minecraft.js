ServerEvents.tags("item", (event) => {
  event.removeAllTagsFrom(/^minecraft:.+((log)|(wood)|(stem)|(hyphae))$/);
  event.removeAllTagsFrom(/^ad_astra:.+((log)|(wood)|(stem)|(hyphae))$/);
});
