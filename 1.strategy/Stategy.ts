interface Strategy {
  doAlgorithm(data: string[]): string[];
}

interface DuckStrategy {
  quack(): string;
  swim(): string;
  display(): string;
  orther(): void;
}

export { Strategy, DuckStrategy };
