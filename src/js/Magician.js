import Character from './character';

export default class Magician extends Character {
  constructor(name) {
    const type = 'Magician';
    super(name, type);
  }
}
