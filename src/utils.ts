import { ListFilter } from "./types/generic";

export const convertFilterToQueryParams = (filter?: ListFilter): Record<string, string> => {
    if (!filter) return {};

    return Object.entries(filter).reduce((acc, [key, value]) => {
        if (value !== undefined) {
            acc[key] = value.toString();
        }
        return acc;
    }, {} as Record<string, string>);
};
