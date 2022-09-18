import { Exception } from "./Exception";

class Singleton {
  private static readonly instanceConst: Singleton = new Singleton();
  private static instance: Singleton = new Singleton();

  private constructor() {}

  // eager initialization
  public static getEagerInitializedInstance(): Singleton {
    return this.instanceConst;
  }

  // Static Block
  static {
    try {
      this.instance = new Singleton();
    } catch (exception: any) {
      exception = new Exception();

      throw exception;
    }
  }

  public static getStaticBlockInstance(): Singleton {
    return this.instance;
  }

  // Lazy initialization
  public static getLazyInitializedInstance(): Singleton {
    if (this.instance == null) {
      this.instance = new Singleton();
    }

    return this.instance;
  }

  // Thread Safe (double check)
  // Bill Pugh Singleton Implementation
  // Using Reflection to destroy Singleton Pattern
  // Enum Singleton
}

export { Singleton };
