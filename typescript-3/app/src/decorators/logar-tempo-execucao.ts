export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    description: PropertyDescriptor
  ) {
    const metodoOriginal = description.value;
    description.value = function (...args: any[]) {
      let devisor = 1;
      let unidade = "milisegundos";
      if (emSegundos) {
        devisor = 1000;
        unidade = "segundos";
      }
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(
        `${propertyKey}, tempo de execução: ${(t2 - t1) / devisor} ${unidade}`
      );
      retorno;
    };

    return description;
  };
}
