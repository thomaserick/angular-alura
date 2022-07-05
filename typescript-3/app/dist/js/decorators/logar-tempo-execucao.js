export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, description) {
        const metodoOriginal = description.value;
        description.value = function (...args) {
            let devisor = 1;
            let unidade = "milisegundos";
            if (emSegundos) {
                devisor = 1000;
                unidade = "segundos";
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / devisor} ${unidade}`);
            return retorno;
        };
        return description;
    };
}
