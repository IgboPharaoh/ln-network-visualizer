import { EventEmitter } from "stream";
import { IGraphService } from "../IGraphService";
import { LndRestClient } from "./LndRestClient";
import { Lnd } from "./LndRestTypes";

/**
 * Provides an adapter for retrieving and subscribing to LND graph data.
 * This adapter isolates our application from the inner workers of
 * connecting to LND via REST. The application understands uses and
 * understands the IGraphService interface.
 */
export class LndGraphService extends EventEmitter implements IGraphService {
    constructor(readonly lnd: LndRestClient) {
        super();
    }

    public async getGraph(): Promise<Lnd.Graph> {
        return await this.lnd.getGraph();
    }

    /**
     * Subscribes to LND graph updates and emits `update` events.
     * @param cb
     * @returns
     */
    public async subscribeGraph(): Promise<void> {
        // Exercise: subscribe to the Lnd graph updates using `subscribeGraph`
        // and emit a "update" event using `this.emit`.
    }
}

/**
 * Adds type checking for the emit event
 */

export interface LndGraphService {
    emit(event: "update", update: Lnd.GraphUpdate);
}
