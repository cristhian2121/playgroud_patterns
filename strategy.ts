interface IFiltersStrategy<T> {
  doSomething(): T;
}

class DogStrategy implements IFiltersStrategy<string> {
  doSomething(): string {
    return 'DogStrategy';
  }
}

class CatStrategy implements IFiltersStrategy<number> {
  doSomething(): number {
    return 4;
  }
}

class Strategy {
  private strategy: IFiltersStrategy<any>;

  constructor(strategy: IFiltersStrategy<any>) {
    this.strategy = strategy;
  }

  public execute(): any {
    return this.strategy.doSomething();
  }
}

class App {

  kindOf: "Cat" | "Dog";

  constructor(kind: "Cat" | "Dog") {
    this.kindOf = kind;
  }

  runMethod() {
    let entityStrategy: Strategy;

    switch (this.kindOf) {
      case "Cat":
        entityStrategy = new Strategy(new CatStrategy());
        break;
      case "Dog":
        entityStrategy = new Strategy(new DogStrategy());
        break;
      default:
        throw new Error("Invalid kind of entity");
    }

    return entityStrategy.execute();
  }

}

const app = new App("Cat");
const res = app.runMethod();
console.log('res: ', res);