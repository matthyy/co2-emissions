const networkConsumption = new Map()

networkConsumption.set(0, 0.01821)
networkConsumption.set(1, 0.00853)

export function getConsumptionByNetworkId (id) {
    return networkConsumption.get(id)
}