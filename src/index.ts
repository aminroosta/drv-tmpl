class Bar {
  name: string;
  constructor({ name }: { name: string }) {
    this.name = name;
  }

  public foo() {
    console.log(`${this.name} foo!`);
  }
}

const animal = new Bar({ name: "drv-tmpl" });
animal.foo();
