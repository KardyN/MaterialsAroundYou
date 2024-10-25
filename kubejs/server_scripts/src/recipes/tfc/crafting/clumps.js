ServerEvents.recipes(event => {
    oreTypes.forEach(item => {
        switch (item.type){
            case "tfc_ore":
                //TEST THIS
                event.recipes.tfc.extra_products_shapeless_crafting(
                    ["tfc:rock/loose/andesite"],
                    recipes.shapeless(
                        '1x kubejs:clump_'+item.id,
                        [
                            'tfc:ore/small_'+item.id,
                            '#tfc:hammers'
                        ] 
                    ).damageIngredient('#tfc:hammers', 1)
                )
                event.shapeless(
                    '1x kubejs:clump_'+item.id,
                    [
                        'tfc:ore/small_'+item.id,
                        '#tfc:hammers'
                    ]
                ).damageIngredient('#tfc:hammers', 1)
                event.shapeless(
                    '2x kubejs:clump_'+item.id,
                    [
                        'tfc:ore/poor_'+item.id,
                        '#tfc:hammers'
                    ]
                ).damageIngredient('#tfc:hammers', 2)
                event.shapeless(
                    '3x kubejs:clump_'+item.id,
                    [
                        'tfc:ore/normal_'+item.id,
                        '#tfc:hammers'
                    ]
                ).damageIngredient('#tfc:hammers', 3)
                event.shapeless(
                    '5x kubejs:clump_'+item.id,
                    [
                        'tfc:ore/rich_'+item.id,
                        '#tfc:hammers'
                    ]
                ).damageIngredient('#tfc:hammers', 5)
                break

            case "tfc_ie_ore":
                event.shapeless(
                    '1x kubejs:clump_'+item.id,
                    [
                        'tfc_ie_addon:ore/small_'+item.id,
                        '#tfc:hammers'
                    ]
                ).damageIngredient('#tfc:hammers', 1)
                event.shapeless(
                    '2x kubejs:clump_'+item.id,
                    [
                        'tfc_ie_addon:ore/poor_'+item.id,
                        '#tfc:hammers'
                    ]
                ).damageIngredient('#tfc:hammers', 2)
                event.shapeless(
                    '3x kubejs:clump_'+item.id,
                    [
                        'tfc_ie_addon:ore/normal_'+item.id,
                        '#tfc:hammers'
                    ]
                ).damageIngredient('#tfc:hammers', 3)
                event.shapeless(
                    '5x kubejs:clump_'+item.id,
                    [
                        'tfc_ie_addon:ore/rich_'+item.id,
                        '#tfc:hammers'
                    ]
                ).damageIngredient('#tfc:hammers', 5)
                break

            case "tfc_mineral":
                event.shapeless(
                    '2x kubejs:clump_'+item.id,
                    [
                        'tfc:ore/'+item.id,
                        '#tfc:hammers'
                    ]
                ).damageIngredient('#tfc:hammers', 1)
                break
        }   
    })
})