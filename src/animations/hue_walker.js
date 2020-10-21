// This animation is for a sphereoid
import { AnimationBase } from './new_base';
import { Pixel } from '../pixel';

export class HueWalker extends AnimationBase {
  init() {
    this.fill((new Pixel()).setHSL(0.5, 1, 0.5));
  }

  tick() {
    for(let pixel of this.frame) {
      pixel.addHSL(0.001, 0, 0);
    }
  }
}
