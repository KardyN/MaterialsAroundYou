ServerEvents.recipes(event => {
    oreTypes.forEach(item => {
        event.recipes.tfc.quern(
            "1x kubejs:dirty_dust_"+item.id,
            "clump"+item.id
        )
    })
})