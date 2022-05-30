import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';


// eslint-disable-next-line no-unused-vars
type Constructor<T = {}> = new (...args: any[]) => T;

export declare class GameMixinInterface {

  id: string;

  // eslint-disable-next-line no-unused-vars
  savePoints(i: number): void;

}

export const GameMixin = <T extends Constructor<LitElement>>(superClass: T) => {

  class GameMixinClass extends superClass {

    @property()
      id = '';

    savePoints(i: number): void {
      console.log(`${this.id}: ${i}`);
    }

  };

  return GameMixinClass as Constructor<GameMixinInterface> & T;

};