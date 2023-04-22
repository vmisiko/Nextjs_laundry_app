
class Ploc {
  public store: any;
  constructor(store: any) {
    this.store = store;
  }

  public get state() {
    return this.store.getState();
  }

}

export default Ploc;
