const tfcRockOresTagList = Block.getTaggedIds("tfc:rock/ores");

LootJS.modifiers((event) => {
    for (let blockId of tfcRockOresTagList) {
        event.addBlockLootModifier(blockId).addNBT({
            // For tfc:ore/poor_native_copper/granite =>
            // {RockType: "granite"}
            RockType: /[a-z]+$/.exec(blockId).toString(),
        });
    }
});
