import { UniqueIdService } from './unique-id.service';

let service!: UniqueIdService;

beforeEach(() => {
  service = new UniqueIdService();
});

describe(UniqueIdService.name, () => {
  it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
    const id = service.generateUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it('#generateUniqueIdWithPrefix should not generate duplicate IDs when called multiple times', () => {
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });

  it('#getNumberOfGeneratedUniqueIds deveria retornar o numero de ids gerados quando chamado', () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it('#generateUniqueIdWithPrefix deveria lancar exceção quando chamado por valor vazio', () => {
    const emptyValues = [null, undefined, '', '0'];
    emptyValues.forEach((emptyValues) =>
      expect(() => service.generateUniqueIdWithPrefix(emptyValues))
        .withContext(`Empty value: ${emptyValues}`)
        .toThrow()
    );
  });
});
