/*const oreTypes = [
    {id: "native_copper", color: "#d88854", type: "tfc_ore"},
    {id: "native_gold", color: "#c89d28", type: "tfc_ore"},
    {id: "hematite", color: "#b05e56", type: "tfc_ore"},
    {id: "native_silver", color: "#b4b7c4", type: "tfc_ore"},
    {id: "cassiterite", color: "#6a6655", type: "tfc_ore"},
    {id: "bismuthinite", color: "#416f3d", type: "tfc_ore"},
    {id: "garnierite", color: "#3c5035", type: "tfc_ore"},
    {id: "malachite", color: "#587e79", type: "tfc_ore"},
    {id: "magnetite", color: "#3b3c3c", type: "tfc_ore"},
    {id: "limonite", color: "#93714a", type: "tfc_ore"},
    {id: "sphalerite", color: "#a4a3a3", type: "tfc_ore"},
    {id: "tetrahedrite", color: "#838283", type: "tfc_ore"},
    {id: "gypsum", color: "#977c62", type: "tfc_mineral"},
    {id: "graphite", color: "#3a4249", type: "tfc_mineral"},
    {id: "sulfur", color: "#aaa552", type: "tfc_mineral"},
    {id: "cinnabar", color: "#ac161d", type: "tfc_mineral"},
    {id: "cryolite", color: "#909191", type: "tfc_mineral"},
    {id: "saltpeter", color: "#aaaaa9", type: "tfc_mineral"},
    {id: "sylvite", color: "#b98761", type: "tfc_mineral"},
    {id: "borax", color: "#a7a8a7", type: "tfc_mineral"},
    {id: "bauxite", color: "#e77263", type: "tfc_ie_ore"},
    {id: "galena", color: "#5f5764", type: "tfc_ie_ore"},
    {id: "uraninite", color: "#7a9a65", type: "tfc_ie_ore"},

];
*/
ServerEvents.recipes(event => {
    oreTypes.forEach(item => {
        event.recipes.tfc.quern(
            "1x kubejs:dirty_dust_"+item.id,
            "clump"+item.id
        )
    })
})