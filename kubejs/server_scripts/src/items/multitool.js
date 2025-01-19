const swapToNext = (event) => {
  let thisDamageValue = event.item.damageValue;
  let thisId = event.item.id;
  let nextId = global.multitoolIds[global.multitoolIds.indexOf(thisId) + 1];
  event.player.setMainHandItem(Item.of(nextId, `{Damage:${thisDamageValue}}`));
  event.player.cooldowns.addCooldown(nextId, 15);
};

BlockEvents.rightClicked(/kubejs:metal\/.*prospector.*\/osmirite/, (event) => {
  if (
    event.player.crouching &&
    !event.player.cooldowns.isOnCooldown(event.player.mainHandItem)
  ) {
    swapToNext(event);
    event.cancel();
  }
});

ItemEvents.rightClicked(/kubejs:metal\/.*prospector.*\/osmirite/, (event) => {
  if (
    event.player.crouching == true &&
    !event.player.cooldowns.isOnCooldown(event.player.mainHandItem)
  ) {
    swapToNext(event);
  }
  event.player.setMainHandItem();
});
