JEIEvents.hideItems((event) => {
  jei.items.hide.forEach((hidden_item) => {
    event.hide(hidden_item);
  });
});
