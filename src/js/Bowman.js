import Character from './character';

export default class Bowman extends Character {
  constructor(name) {
    const type = 'Bowman';
    super(name, type);
  }
}
