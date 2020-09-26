import Daemon from '../Daemon';

test('DaemonClassTest', () => {
  const expected = {
    name: 'Nimba', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  const testClass = new Daemon('Nimba');
  expect(testClass).toEqual(expected);
});
