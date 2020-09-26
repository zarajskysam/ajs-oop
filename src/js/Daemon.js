import Character from './character';

export default class Daemon extends Character {
  constructor(name) {
    const type = 'Daemon';
    super(name, type);
  }
}
