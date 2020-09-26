import Character from './character';

export default class Undead extends Character {
  constructor(name) {
    const type = 'Undead';
    super(name, type);
  }
}
