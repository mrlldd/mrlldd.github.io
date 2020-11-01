import {useEffect, useState} from "react";

interface UseIntervalValueParams<T> {
    intervalMs: number;
    defaultValue?: T;
}

export default function useIntervalValue<T>(getter: () => T, {intervalMs, defaultValue}: UseIntervalValueParams<T>) {
    const [value, setValue] = useState<T>(defaultValue ?? getter);

    useEffect(() => {
        const intervalId = setInterval(
            () => setValue(getter),
            intervalMs,
        );
        return () => clearTimeout(intervalId);
    }, [getter, intervalMs]);
    return value;
}