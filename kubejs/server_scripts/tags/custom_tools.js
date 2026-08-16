ServerEvents.tags("item", (event) => {
  const commonToolTagList = [
    "immersiveengineering:toolbox/tools",
    "c:tools",
    "tfc:usable_on_tool_rack",
  ];

  global.toolList.forEach((toolType) => {
    global.newToolMaterialList.forEach((material) => {
      let tool = `kubejs:metal/${toolType}/${material}`;
      commonToolTagList.forEach((tag) => {
        event.add(tag, tool);
      });
      event.add(`tfc:tools/${material}`, tool);

      switch (toolType) {
        case "pickaxe":
          event.add("c:enchantables", tool);
          event.add("c:tools/mining_tool", tool);
          event.add("minecraft:breaks_decorated_pots", tool);
          event.add("minecraft:enchantable/durability", tool);
          event.add("minecraft:enchantable/mining", tool);
          event.add("minecraft:enchantable/mining_loot", tool);
          event.add("minecraft:enchantable/vanishing", tool);
          event.add("minecraft:pickaxes", tool);
          event.add("tfc:deals_piercing_damage", tool);
          break;

        case "propick":
          event.add("c:tools/propick", tool);
          break;

        case "axe":
          event.add("c:enchantables", tool);
          event.add("c:tools/melee_weapon", tool);
          event.add("minecraft:axes", tool);
          event.add("minecraft:breaks_decorated_pots", tool);
          event.add("minecraft:enchantable/durability", tool);
          event.add("minecraft:enchantable/mining", tool);
          event.add("minecraft:enchantable/mining_loot", tool);
          event.add("minecraft:enchantable/sharp_weapon", tool);
          event.add("minecraft:enchantable/vanishing", tool);
          event.add("minecraft:enchantable/weapon", tool);
          event.add("tfc:deals_slashing_damage", tool);
          break;

        case "shovel":
          event.add("c:enchantables", tool);
          event.add("minecraft:breaks_decorated_pots", tool);
          event.add("minecraft:enchantable/durability", tool);
          event.add("minecraft:enchantable/mining", tool);
          event.add("minecraft:enchantable/mining_loot", tool);
          event.add("minecraft:enchantable/vanishing", tool);
          event.add("minecraft:shovels", tool);
          event.add("tfc:deals_crushing_damage", tool);
          break;

        case "hoe":
          event.add("c:enchantables", tool);
          event.add("minecraft:breaks_decorated_pots", tool);
          event.add("minecraft:enchantable/durability", tool);
          event.add("minecraft:enchantable/mining", tool);
          event.add("minecraft:enchantable/mining_loot", tool);
          event.add("minecraft:enchantable/vanishing", tool);
          event.add("minecraft:hoes", tool);
          event.add("tfc:deals_slashing_damage", tool);
          event.add("tfc:tools/sharp", tool);
          break;

        case "chisel":
          event.add("c:tools/chisel", tool);
          event.add("tfc:deals_piercing_damage", tool);
          break;

        case "hammer":
          event.add("c:tools/hammer", tool);
          event.add("immersiveengineering:tools/hammers", tool);
          event.add("tfc:deals_crushing_damage", tool);
          event.add("tfc:trip_hammers", tool);
          break;

        case "saw":
          event.add("c:tools/saw", tool);
          event.add("tfc:deals_slashing_damage", tool);
          break;

        case "knife":
          event.add("c:enchantables", tool);
          event.add("c:tools/knife", tool);
          event.add("farmersdelight:enchantable/knife", tool);
          event.add("farmersdelight:straw_harvesters", tool);
          event.add("farmersdelight:tools/knives", tool);
          event.add("minecraft:breaks_decorated_pots", tool);
          event.add("minecraft:enchantable/durability", tool);
          event.add("minecraft:enchantable/fire_aspect", tool);
          event.add("minecraft:enchantable/mining", tool);
          event.add("minecraft:enchantable/mining_loot", tool);
          event.add("minecraft:enchantable/sharp_weapon", tool);
          event.add("minecraft:enchantable/sword", tool);
          event.add("minecraft:enchantable/vanishing", tool);
          event.add("minecraft:enchantable/weapon", tool);
          event.add("tfc:deals_piercing_damage", tool);
          event.add("tfc:tools/sharp", tool);
          break;

        case "scythe":
          event.add("c:tools/scythe", tool);
          event.add("tfc:deals_slashing_damage", tool);
          event.add("tfc:tools/sharp", tool);
          break;

        case "javelin":
          event.add("c:tools/ranged_weapon", tool);
          event.add("c:tools/spear", tool);
          event.add("tfc:deals_piercing_damage", tool);
          break;

        case "sword":
          event.add("c:enchantables", tool);
          event.add("c:tools/melee_weapon", tool);
          event.add("minecraft:breaks_decorated_pots", tool);
          event.add("minecraft:enchantable/durability", tool);
          event.add("minecraft:enchantable/fire_aspect", tool);
          event.add("minecraft:enchantable/sharp_weapon", tool);
          event.add("minecraft:enchantable/sword", tool);
          event.add("minecraft:enchantable/vanishing", tool);
          event.add("minecraft:enchantable/weapon", tool);
          event.add("minecraft:swords", tool);
          event.add("tfc:deals_slashing_damage", tool);
          break;

        case "mace":
          event.add("c:tools/mace", tool);
          event.add("c:tools/melee_weapon", tool);
          event.add("tfc:deals_crushing_damage", tool);
          break;

        case "fishing_rod":
          event.add("c:tools/fishing_rod", tool);
          event.add("tfc:deals_crushing_damage", tool);
          event.add("tfc:holds_small_fishing_bait", tool);
          event.add("tfc:holds_large_fishing_bait", tool);
          break;

        case "shears":
          event.add("c:tools/shear", tool);
          event.add("tfc:deals_slashing_damage", tool);
          break;

        case "prospector_hammer":
          event.add("precisionprospecting:tools/prospector_hammer", tool);
          break;

        case "prospector_drill":
          event.add("precisionprospecting:tools/prospector_drill", tool);
          break;

        case "mineral_prospector":
          event.add("precisionprospecting:tools/mineral_prospector", tool);
          break;
      }
    });
  });
});
