//priority: 99
ItemEvents.toolTierRegistry((event) => {
  event.add("osmirite", (tier) => {
    tier.uses = 10000;
    tier.speed = 14.0;
    tier.attackDamageBonus = 11.0;
    tier.level = 7;
    tier.enchantmentValue = 25;
    //tier.repairIngredient = '#forge:ingots/iron'
  });
});
/*
ItemEvents.armorTierRegistry((event) => {
  event.add("osmirite", (tier) => {
    tier.durabilityMultiplier = 15; // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [2, 5, 6, 2]; // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 9;
    tier.equipSound = "minecraft:item.armor.equip_iron";
    tier.repairIngredient = "#forge:ingots/iron";
    tier.toughness = 0.0; // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.0;
  });
});*/
