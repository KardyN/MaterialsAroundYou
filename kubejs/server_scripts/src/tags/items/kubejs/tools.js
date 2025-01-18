ServerEvents.tags("item", (event) => {
  global.osmiriteToolList.forEach((toolType) => {
    global.commonToolTagList.forEach((tag) => {
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

  global.fishingRodTagList.forEach((tag) => {
    event.add(tag, "kubejs:metal/fishing_rod/osmirite");
  });

  global.shearsTagList.forEach((tag) => {
    event.add(tag, "kubejs:metal/shears/osmirite");
  });
});
