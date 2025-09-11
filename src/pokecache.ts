type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined;
    #interval: number;

    constructor(reapInterval: number) {
        this.#interval = reapInterval;
        this.#startReapLoop();
    }

    add<T>(key: string, val: T) {
        const createdAt = Date.now();
        this.#cache.set(key, {createdAt, val});
    }

    get<T>(key: string) {
        return this.#cache.get(key)?.val;
    }

    #reap() {
        this.#cache.forEach((entry: CacheEntry<any>, key: string, map: Map<string, CacheEntry<any>>) => {
            if (entry.createdAt < (Date.now() - this.#interval)) {
                this.#cache.delete(key);
            }
        })
    }

    #startReapLoop() {
        this.#reapIntervalId = setInterval(this.#reap.bind(this), this.#interval);
    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}