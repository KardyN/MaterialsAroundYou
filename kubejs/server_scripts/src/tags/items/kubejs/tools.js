const osmiriteToolsList = [
  "pickaxe",
  "sword",
  "axe",
  "shovel",
  "hoe",
  "chisel",
  "hammer",
  "saw",
  "knife",
  "scythe",
  "javelin",
  "propick",
  "mace",
];
const commonTagList = [
  "immersiveengineering:toolbox/tools",
  "minecraft:breaks_decorated_pots",
  "minecraft:tools",
  "forge:tools",
  "tfc:metal_item/osmirite_tools",
  "tfc:metal_item/osmirite",
  "tfc:usable_on_tool_rack",
];
const fishingRodTagList = [
  "tfc:holds_small_fishing_bait",
  "tfc:holds_large_fishing_bait",
  "tfc:usable_on_tool_rack",
  "tfc:metal_item/osmirite",
  "forge:fishing_rods",
  "forge:fishing_rods/osmirite",
];
const shearsTagList = [
  "tfc:usable_on_tool_rack",
  "tfc:metal_item/osmirite",
  "forge:shears",
  "tfc:shears",
];

ServerEvents.tags("item", (event) => {
  osmiriteToolsList.forEach((toolType) => {
    commonTagList.forEach((tag) => {
      event.add(tag, `kubejs:metal/${toolType}/osmirite`);
    });

    //for vanilla stuff
    toolType == ("pickaxe" || "sword" || "axe" || "shovel" || "hoe") &&
      event.add(`minecraft:${toolType}s`, `kubejs:metal/${toolType}/osmirite`);

    //kniVes... hmm maybe we shouldn't always follow the rules
    toolType != "knife"
      ? event.add(`tfc:${toolType}s`, `kubejs:metal/${toolType}/osmirite`)
      : event.add("tfc:knives", "kubejs:metal/knife/osmirite");

    //so brutal
    toolType == "axe" &&
      event.add("tfc:axes_that_log", `kubejs:metal/${toolType}/osmirite`);

    toolType == "shovel" &&
      event.add("tfc:extinguisher", `kubejs:metal/shovel/osmirite`);

    toolType == ("knife" || "hoe" || "scythe") &&
      event.add("tfc:sharp_tools", `kubejs:metal/${toolType}/osmirite`);

    toolType == ("axe" || "sword" || "scythe") &&
      event.add(
        "tfc:deals_slashing_damage",
        `kubejs:metal/${toolType}/osmirite`
      );

    toolType == ("hammer" || "mace") &&
      event.add(
        "tfc:deals_crushing_damage",
        `kubejs:metal/${toolType}/osmirite`
      );

    toolType == ("javelin" || "knife") &&
      event.add(
        "tfc:deals_piercing_damage",
        `kubejs:metal/${toolType}/osmirite`
      );
  });

  fishingRodTagList.forEach((tag) => {
    event.add(tag, "kubejs:metal/fishing_rod/osmirite");
  });

  shearsTagList.forEach((tag) => {
    event.add(tag, "kubejs:metal/shears/osmirite");
  });
});
