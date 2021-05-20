export class Adder {
  value: number;
  constructor({ value }: { value: number }) {
    this.value = value;
  }

  public add(n: number) {
    this.value += n;
  }
  public get() {
    return this.value;
  }
}
