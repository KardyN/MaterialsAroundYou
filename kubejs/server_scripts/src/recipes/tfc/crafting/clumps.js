ServerEvents.recipes((event) => {
  global.oreTypes.forEach((item) => {
    switch (item.type) {
      case "tfc_ore":
        event
          .shapeless("1x kubejs:clump_" + item.id, [
            "tfc:ore/small_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("2x kubejs:clump_" + item.id, [
            "tfc:ore/poor_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("3x kubejs:clump_" + item.id, [
            "tfc:ore/normal_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("5x kubejs:clump_" + item.id, [
            "tfc:ore/rich_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);

        break;
      case "tfc_ie_ore":
        event
          .shapeless("1x kubejs:clump_" + item.id, [
            "tfc_ie_addon:ore/small_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("2x kubejs:clump_" + item.id, [
            "tfc_ie_addon:ore/poor_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("3x kubejs:clump_" + item.id, [
            "tfc_ie_addon:ore/normal_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("5x kubejs:clump_" + item.id, [
            "tfc_ie_addon:ore/rich_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        break;
      case "firmalife_ore":
        event
          .shapeless("1x kubejs:clump_" + item.id, [
            "firmalife:ore/small_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("2x kubejs:clump_" + item.id, [
            "firmalife:ore/poor_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("3x kubejs:clump_" + item.id, [
            "firmalife:ore/normal_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("5x kubejs:clump_" + item.id, [
            "firmalife:ore/rich_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        break;
      case "tfc_mineral":
        event
          .shapeless("2x kubejs:clump_" + item.id, [
            "tfc:ore/" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        break;
    }
  });
});
