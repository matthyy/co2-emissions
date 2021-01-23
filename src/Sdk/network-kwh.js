const networks = [
    {
        index: 0,
        name: "Wifi",
        val: 0.01821
    },
    {
        index: 1,
        name: "4G",
        val: 0.00853
    }
]

/**
 *
 * @param {number }id
 * @returns {object}
 */
export function getKwhByNetworkId (id) {
    return networks.find((network) => network.index === id)
}

/**
 * @returns {object}
 */
export function getKwhNetworks () {
    return networks
}