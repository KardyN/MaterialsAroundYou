LootJS.modifiers((event) => {
  const tfcRockOresIdsByTag = Block.getTaggedIds("c:ores");
  //const oreWithoutRock = ["bituminous_coal", "lignite", "halite"];
  const minerals = [
    "gypsum",
    "graphite",
    "sulfur",
    "cinnabar",
    "cryolite",
    "saltpeter",
    "sylvite",
    "borax",
  ];

  tfcRockOresIdsByTag.forEach((blockId) => {
    let oreType = /\/[a-z_]+\//.exec(blockId);
    let rockType = /[a-z]+$/.exec(blockId)[0];
    if (oreType) {
      oreType = oreType[0].slice(1, -1);
      event.addBlockModifier(blockId).addLoot(
        LootEntry.of(`2x tfc:rock/loose/${rockType}`),
        LootEntry.of(`1x tfc:rock/loose/${rockType}`).when((c) => {
          c.randomChance(0.75);
        }),
        LootEntry.of(`1x tfc:rock/loose/${rockType}`).when((c) => {
          c.randomChance(0.5);
        }),
        LootEntry.of(`1x tfc:rock/loose/${rockType}`).when((c) => {
          c.randomChance(0.25);
        })
      );
    } else {
      oreType = /[a-z_]+$/.exec(blockId)[0];
      event.addBlockModifier(blockId).addLoot(
        LootEntry.of(`3x tfc:ore/${oreType}`),
        LootEntry.of(`1x tfc:ore/${oreType}`).when((c) => {
          c.randomChance(0.75);
        }),
        LootEntry.of(`1x tfc:ore/${oreType}`).when((c) => {
          c.randomChance(0.5);
        }),
        LootEntry.of(`1x tfc:ore/${oreType}`).when((c) => {
          c.randomChance(0.25);
        })
      );
    }
    if (minerals.includes(oreType)) {
      event.addBlockModifier(blockId).addLoot(
        LootEntry.of(`2x tfc:ore/${oreType}`),
        LootEntry.of(`1x tfc:ore/${oreType}`).when((c) => {
          c.randomChance(0.75);
        }),
        LootEntry.of(`1x tfc:ore/${oreType}`).when((c) => {
          c.randomChance(0.25);
        })
      );
    }
  });
  event
    .addBlockModifier("#tfc:clays/kaolin")
    .addLoot(LootEntry.of("1x tfc:kaolin_clay"));
});
