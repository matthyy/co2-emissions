const devicesByConsumption = new Map()

devicesByConsumption.set(0, 0.00120)
devicesByConsumption.set(1, 0.00300)
devicesByConsumption.set(2, 0.02200)
devicesByConsumption.set(3, 0.12000)

export function getConsumptionByDeviceId (id) {
    return devicesByConsumption.get(id)
}