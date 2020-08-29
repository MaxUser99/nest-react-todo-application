import { AnyTxtRecord } from "dns";

export interface ILoadable <T> {
    data: T | null;
    isLoading: boolean;
    error: string | boolean;
}