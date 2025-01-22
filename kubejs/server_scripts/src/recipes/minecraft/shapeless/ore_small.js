ServerEvents.recipes((event) => {
  global.oreList.forEach((ore) => {
    Object.entries(global.smallOreYieldByQualityDictionary).forEach(
      ([quality, amount]) => {
        event
          .shapeless(`${amount}x ${ore.mod}:ore/small_${ore.name}`, [
            `${ore.mod}:ore/${quality}_${ore.name}`,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
      }
    );
  });
});
