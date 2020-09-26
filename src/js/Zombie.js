import Character from './character';

export default class Zombie extends Character {
  constructor(name) {
    const type = 'Zombie';
    super(name, type);
  }
}
