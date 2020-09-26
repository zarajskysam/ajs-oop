import Magician from '../Magician';

test('MagicianClassTest', () => {
  const expected = {
    name: 'Nimba', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  const testClass = new Magician('Nimba');
  expect(testClass).toEqual(expected);
});
