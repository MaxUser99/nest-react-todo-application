import { ILoadable } from "../interfaces/ILoadable";

export class Loadable<T> implements ILoadable<T> {
    public data: T | null;
    public isLoading: boolean;
    public error: string | boolean;

    constructor({ data = null, isLoading = false, error = false }: Partial<ILoadable<T>> = {}) {
        this.data = data;
        this.isLoading = isLoading;
        this.error = error;
    }
}