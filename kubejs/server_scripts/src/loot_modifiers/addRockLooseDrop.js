const tfcRockOresTagList = Block.getTaggedIds("tfc:rock/ores");

LootJS.modifiers((event) => {
  tfcRockOresTagList.forEach((blockId) => {
    let rockType = /[a-z]+$/.exec(blockId)[0];
    event.addBlockLootModifier(blockId).addLoot(
      LootEntry.of("3x tfc:rock/loose/" + rockType),
      LootEntry.of("tfc:rock/loose/" + rockType).when((c) => {
        c.randomChance(0.5);
      })
    );
  });
});
