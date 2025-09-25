// disaster-response-network.js
// Coordinates rescue assets and operations for PulseNet Disaster AI

export class DisasterResponseNetwork {
    constructor() {
        this.assets = [];
        this.operations = [];
    }

    addAsset(asset) {
        this.assets.push(asset);
    }

    scheduleOperation(operation) {
        this.operations.push(operation);
    }

    getActiveOperations() {
        return this.operations.filter(op => op.status === 'active');
    }

    dispatchAsset(assetId, location) {
        const asset = this.assets.find(a => a.id === assetId);
        if (asset) {
            asset.location = location;
            asset.status = 'dispatched';
        }
    }

    updateOperationStatus(opId, status) {
        const op = this.operations.find(o => o.id === opId);
        if (op) {
            op.status = status;
        }
    }
}

// Example asset: { id, type, status, location }
// Example operation: { id, description, status, assignedAssets }
