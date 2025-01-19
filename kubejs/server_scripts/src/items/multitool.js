const swapToNext = (item, player) => {
  let nextId = global.multitoolIds[global.multitoolIds.indexOf(item.id) + 1];
  player.setMainHandItem(Item.of(nextId, `{Damage:${item.damageValue}}`));
  player.cooldowns.addCooldown(nextId, 15);
};

BlockEvents.rightClicked(/kubejs:metal\/.*prospector.*\/osmirite/, (event) => {
  const { item, player } = event;
  if (player.crouching && !player.cooldowns.isOnCooldown(player.mainHandItem)) {
    swapToNext(item, player);
    event.cancel();
  }
});

ItemEvents.rightClicked(/kubejs:metal\/.*prospector.*\/osmirite/, (event) => {
  const { item, player } = event;
  if (player.crouching && !player.cooldowns.isOnCooldown(player.mainHandItem)) {
    swapToNext(item, player);
  }
});
