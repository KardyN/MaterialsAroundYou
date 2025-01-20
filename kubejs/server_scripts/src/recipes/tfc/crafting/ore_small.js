ServerEvents.recipes((event) => {
  global.oreList.forEach((ore) => {
    switch (ore.mod) {
      case "tfc":
        event
          .shapeless("2x tfc:ore/small_" + ore.name, [
            "tfc:ore/poor_" + ore.name,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("3x tfc:ore/small_" + ore.name, [
            "tfc:ore/normal_" + ore.name,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("5x tfc:ore/small_" + ore.name, [
            "tfc:ore/rich_" + ore.name,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);

        break;
      case "tfc_ie_addon":
        event
          .shapeless("2x tfc_ie_addon:ore/small_" + ore.name, [
            "tfc_ie_addon:ore/poor_" + ore.name,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("3x tfc_ie_addon:ore/small_" + ore.name, [
            "tfc_ie_addon:ore/normal_" + ore.name,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("5x tfc_ie_addon:ore/small_" + ore.name, [
            "tfc_ie_addon:ore/rich_" + ore.name,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        break;
      case "firmalife":
        event
          .shapeless("2x firmalife:ore/small_" + ore.name, [
            "firmalife:ore/poor_" + ore.name,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("3x firmalife:ore/small_" + ore.name, [
            "firmalife:ore/normal_" + ore.name,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("5x firmalife:ore/small_" + ore.name, [
            "firmalife:ore/rich_" + ore.name,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        break;
    }
  });
});
