ServerEvents.tags("item", (event) => {
  event.removeAllTagsFrom(/^minecraft:.+((log)|(wood)|(stem)|(hyphae))$/);
  event.removeAllTagsFrom(
    /^minecraft:((wooden)|(stone)|(chainmail)|(iron)|(golden)|(diamond)|(netherite))_((shovel)|(pickaxe)|(axe)|(hoe)|(sword)|(helmet)|(chestplate)|(leggings)|(boots))$/
  );
  event.removeAllTagsFrom(/^ad_astra:.+((log)|(wood)|(stem)|(hyphae))$/);
});
