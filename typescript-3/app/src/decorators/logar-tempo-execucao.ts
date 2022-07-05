export function logarTempoDeExecucao() {
  return function (
    target: any,
    propertyKey: string,
    description: PropertyDescriptor
  ) {
    const metodoOriginal = description.value;
    description.value = function (...args: any[]) {
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}, tempo de execução: ${(t1 - t2) / 100}`);
      retorno;
    };

    return description;
  };
}
