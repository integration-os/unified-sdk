import { PaginationHelperFetch } from "./types";

export class PaginationHelper<T> {
    private currentBatch: T[] = [];
    private nextBatch: T[] | null = null;
    private currentCursor: string | undefined;
    private nextCursor: string | undefined;
    private isInitialized: boolean = false;

    constructor(
        private fetchFunction: PaginationHelperFetch<T>
    ) { }

    async initialize(): Promise<void> {
        if (this.isInitialized) return;

        const firstResponse = await this.fetchFunction({});
        this.currentBatch = firstResponse.unified;
        this.currentCursor = firstResponse.pagination.nextCursor;

        if (this.currentCursor) {
            const secondResponse = await this.fetchFunction({
                cursor: this.currentCursor
            });

            this.nextBatch = secondResponse.unified;
            this.nextCursor = secondResponse.pagination.nextCursor;
        }

        this.isInitialized = true;
    }

    async getNextBatch(): Promise<T[]> {
        if (!this.isInitialized) {
            await this.initialize();
        }

        const batchToReturn = this.currentBatch;
        this.currentBatch = this.nextBatch || [];
        this.currentCursor = this.nextCursor;

        if (this.currentCursor) {
            const response = await this.fetchFunction({
                cursor: this.currentCursor
            });

            this.nextBatch = response.unified;
            this.nextCursor = response.pagination.nextCursor;
        } else {
            this.nextBatch = null;
            this.nextCursor = undefined;
        }

        return batchToReturn;
    }

    hasMoreData(): boolean {
        if (!this.isInitialized) {
            return true;
        }

        return this.currentBatch.length > 0 || (this.nextBatch !== null && this.nextBatch.length > 0);
    }
}
