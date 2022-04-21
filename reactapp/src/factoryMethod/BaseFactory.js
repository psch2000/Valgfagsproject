/**
 * Abstract Class BaseFactory.
 *
 * @class BaseFactory
 */

 export class BaseFactory {

    constructor() {
      if (this.constructor == BaseFactory) {
        throw new Error("Abstract classes can't be instantiated.");
      }
    }
  
    makeProduct() {
      throw new Error("Method 'makeProduct()' must be implemented.");
    }

  }