import { Unsubscribe, Store } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

class Ploc{
  public store: ToolkitStore;
  private listeners: ((state: any) => void)[] = [];
  private unsubscribe: Unsubscribe | undefined;

  constructor(store: ToolkitStore) {
    this.store = store;

    // Subscribe to store changes
    this.unsubscribe = store.subscribe(() => {
      this.notifyListeners(); // Notify registered listeners when the store changes
    });
  }

  // Getter for the current state
  get state(): any {
    return this.store.getState();
  }

  // Method to register listeners
  addListener(listener: (state: any) => void): void {
    this.listeners.push(listener);
  }

  // Method to unregister listeners
  removeListener(listener: (state: any) => void): void {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  // Notify all registered listeners when the store state changes
  notifyListeners(): void {
    // Iterate over the registered listeners and call them with the updated state
    this.listeners.forEach((listener) => {
      listener(this.state); // Pass the updated state to the listener
    });
  }

  // Unsubscribe from store changes when the instance is no longer needed
  unsubscribeFromStore(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}

export default Ploc;
