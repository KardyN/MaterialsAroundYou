//ServerEvents.genericLootTables(event => {
    
//})
rockTypes.array.forEach(item => {
    LootJS.modifiers(event => {
        event
        .addLootTableModifier("kubejs:dirty_dust_"+item.id)
        .addAlternativesLoot(
            LootEntry.of("kubejs:dust_"+item.id).when(c => {c.randomChance(0.6)}),
            LootEntry.of("tfc:sand/"+item.colour).when(c => {c.randomChance(0.5)}),
            //LootEntry.of("kubejs:dust_"+item.secondary).when(c => {c.randomChance(0.3)}),
            //LootEntry.of("tfc:gem/amethyst"+item.gem).when(c => {c.randomChance(0.006)}),
        )
    })
});
