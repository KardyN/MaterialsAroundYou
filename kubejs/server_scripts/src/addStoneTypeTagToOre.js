BlockEvents.broken(event => {
    let oreBlockStoneType = /[a-z]+$/.exec(event.block.getId());
    event.player.tell(oreBlockStoneType);
    event.player.tell(event.block.drops);
    event.block.drops.add(1, "minecraft:diamond")
    event.player.tell(event.block.drops);
});

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:gravel")
        .randomChance(0.3)
        .addLoot();
});