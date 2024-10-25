const tfcRockOresTagList = Block.getTaggedIds("tfc:rock/ores");

LootJS.modifiers((event) => {
    for (let blockId of tfcRockOresTagList){
        //console.log(blockId);
        let oreBlockStoneType = /[a-z]+$/.exec(blockId).toString();
        //console.log(oreBlockStoneType);
        event
            .addBlockLootModifier(blockId)
            .addNBT({RockType: oreBlockStoneType});
            //console.log("added nbt to "+blockId)
    };
})