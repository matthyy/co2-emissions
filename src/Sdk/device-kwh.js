const devices = [{
    index: 0,
    name: "Smartphone",
    val : 0.00120
},{
    index: 1,
    name: "Tablet",
    val : 0.00300
},{
    index: 2,
    name: "Laptop",
    val : 0.02200
},{
    index: 3,
    name: "Television",
    val:  0.12000
}]

/**
 * @param {number} id
 * @returns {object}
 */
export function getKwhByDeviceId (id) {
    return devices.find((device) => device.index === id)
}

/**
 *
 * @returns {object}
 */
export function getKwhDevices() {
    return devices
}