

const withPromiseCallback = <T, U extends any[]>(
    func: (...args: U) => Promise<T>
) => {
    return (
        callback: (
            err: any,
            data: T
        ) => any,
        ...rest: U
    ) => func(...rest).then(data => callback(null, data)).catch((err) => callback(err, undefined as any))
}
export default withPromiseCallback