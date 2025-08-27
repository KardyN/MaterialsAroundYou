JEIEvents.hideFluids((event) => {
  jei.fluids.hide.forEach((hidden_fluid) => {
    event.hide(hidden_fluid);
  });
});
