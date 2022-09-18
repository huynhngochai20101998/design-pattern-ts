class Exception extends Error {
  constructor() {
    super("Exception occured in creating singleton instance");

    Object.setPrototypeOf(this, Exception.prototype);
  }
}

export { Exception };
