export function inspect() {
    return function (target, propertyKey, description) {
        const metodoOriginal = description.value;
        description.value = function (...args) {
            console.log(`---- Método ${propertyKey}`);
            console.log(`----- Paramêtros: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`----- Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return description;
    };
}
