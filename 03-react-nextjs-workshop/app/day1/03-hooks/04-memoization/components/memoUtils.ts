export const heavyCalculation = (ms: number) => {
  const start = performance.now();
  while (performance.now() - start < ms) {
    // Blocking main thread...
  }
};
