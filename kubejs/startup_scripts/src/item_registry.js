const oreTypes = [
    {id: "native_copper", color: "#d88854"},
    {id: "native_gold", color: "#c89d28"},
    {id: "hematite", color: "#b05e56"},
    {id: "native_silver", color: "#b4b7c4"},
    {id: "cassiterite", color: "#6a6655"},
    {id: "bismuthinite", color: "#416f3d"},
    {id: "garnierite", color: "#3c5035"},
    {id: "malachite", color: "#587e79"},
    {id: "magnetite", color: "#3b3c3c"},
    {id: "limonite", color: "#93714a"},
    {id: "sphalerite", color: "#a4a3a3"},
    {id: "tetrahedrite", color: "#838283"},
    {id: "gypsum", color: "#977c62"},
    {id: "graphite", color: "#3a4249"},
    {id: "sulfur", color: "#aaa552"},
    {id: "cinnabar", color: "#ac161d"},
    {id: "cryolite", color: "#909191"},
    {id: "saltpeter", color: "#aaaaa9"},
    {id: "sylvite", color: "#b98761"},
    {id: "borax", color: "#a7a8a7"},
    {id: "bauxite", color: "#e77263"},
    {id: "galena", color: "#5f5764"},
    {id: "uraninite", color: "#7a9a65"},
    
];

StartupEvents.registry("item", event => {
    oreTypes.forEach(item => {
        event
        .create("clump_"+item.id)
        .tooltip("Try grinding it!")
        .color(0, item.color)
        .color(1, "#222222")
        .textureJson({
            layer0: "mekanism:item/clump",
            layer1: "mekanism:item/clump_overlay"
        })
        event
        .create("dirty_dust_"+item.id)
        .tooltip("Try washing it!")
        .color(0, item.color)
        .color(1, "#222222")
        .textureJson({
            layer0: "mekanism:item/dirty_dust",
            layer1: "mekanism:item/dirty_dust_overlay"
        })
        event
        .create("dust_"+item.id)
        .tooltip("Try melting it!")
        .color(item.color)
        .texture("mekanism:item/dust")
    });
})
