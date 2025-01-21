const swapToNext = (event) => {
  const { player, item } = event;
  if (
    player.crouching &&
    !player.cooldowns.isOnCooldown(item.id) &&
    /^kubejs:metal\/.*prospector.*\/osmirite/.test(item.id)
  ) {
    let nextId = global.multitoolIds[global.multitoolIds.indexOf(item.id) + 1];
    player.setMainHandItem(Item.of(nextId, `{Damage:${item.damageValue}}`));
    player.cooldowns.addCooldown(nextId, 10);
    // event.cancel();
  }
};

BlockEvents.rightClicked((event) => {
  event.hand == "MAIN_HAND" && swapToNext(event);
});

ItemEvents.rightClicked((event) => {
  event.hand == "MAIN_HAND" && swapToNext(event);
});
