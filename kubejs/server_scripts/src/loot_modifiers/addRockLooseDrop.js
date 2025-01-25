LootJS.modifiers((event) => {
  const tfcRockOresIdsByTag = Block.getTaggedIds("tfc:rock/ores");
  const coals = ["bituminous_coal", "lignite"];
  const minerals = [
    "gypsum",
    "graphite",
    "sulfur",
    "cinnabar",
    "cryolite",
    "saltpeter",
    "sylvite",
    "borax",
    "halite",
  ];

  tfcRockOresIdsByTag.forEach((blockId) => {
    let oreType = /\/[a-z_]+\//.exec(blockId)[0].slice(1, -1);
    let rockType = /[a-z]+$/.exec(blockId)[0];
    if (coals.includes(oreType)) {
      event.addBlockLootModifier(blockId).addLoot(
        LootEntry.of(`5x tfc:ore/${oreType}`),
        LootEntry.of(`1x tfc:ore/${oreType}`).when((c) => {
          c.randomChance(0.5);
        })
      );
    }
    if (minerals.includes(oreType)) {
      event.addBlockLootModifier(blockId).addLoot(
        LootEntry.of(`2x tfc:ore/${oreType}`),
        LootEntry.of(`1x tfc:ore/${oreType}`).when((c) => {
          c.randomChance(0.5);
        })
      );
    }
    event.addBlockLootModifier(blockId).addLoot(
      LootEntry.of(`3x tfc:rock/loose/${rockType}`),
      LootEntry.of(`1x tfc:rock/loose/${rockType}`).when((c) => {
        c.randomChance(0.5);
      })
    );
  });
});
