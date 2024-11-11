import {assets, getAssetByID} from 'asset.js';

class Transaction {
    constructor(assetId, type, quantity) {
      this.asset = getAssetById(assetId);
      if (!this.asset) {
        throw new Error(`Asset with ID ${assetId} not found`);
      }
      this.type = type;
      this.quantity = quantity;
      this.processTransaction();
    }
  
    processTransaction() {
      if (this.type === "buy") {
        this.asset.quantity += this.quantity;
      } else if (this.type === "sell") {
        if (this.asset.quantity < this.quantity) {
          throw new Error(`Insufficient quantity for sale of Basketball ${this.asset.name}`);
        }
        this.asset.quantity -= this.quantity;
      } else {
        throw new Error("Transaction type must be 'buy' or 'sell'");
      }
    }
  }
  