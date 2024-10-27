const tfcRockOresTagList = Block.getTaggedIds("tfc:rock/ores");

LootJS.modifiers((event) => {
    for (const blockId of tfcRockOresTagList) {
        let rockType = /[a-z]+$/.exec(blockId).toString();
        event.addBlockLootModifier(blockId).addLoot(
            LootEntry.of("tfc:rock/loose/" + rockType).when((c) => {
                c.randomChance(1.0);
            }),
            LootEntry.of("tfc:rock/loose/" + rockType).when((c) => {
                c.randomChance(0.5);
            }),
            LootEntry.of("tfc:rock/loose/" + rockType).when((c) => {
                c.randomChance(0.25);
            })
        );
    }
});
