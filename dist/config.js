let config = null;
export function configure(newConfig) {
    config = newConfig;
}
export function getConfig() {
    if (!config) {
        throw new Error("auto-translate has not been configured. Call configure() first.");
    }
    return config;
}
