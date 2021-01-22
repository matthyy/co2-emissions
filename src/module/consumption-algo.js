import {getConsumptionByDeviceId} from "../sdk/device-consumption";
import {getConsumptionByNetworkId} from "../sdk/network-consumption";

export function computeConsumption (networkType, deviceType, hoursOfConsumption) {
    console.log(networkType, deviceType, hoursOfConsumption)
    if(!Number.isInteger(networkType) || !Number.isInteger(deviceType) || !Number.isInteger(hoursOfConsumption)) {
        return 0
    }
    const [deviceConsumption, networkConsumption] = [
        getConsumptionByDeviceId(deviceType),
        getConsumptionByNetworkId(networkType)
    ];
    const totalConsumption = (deviceConsumption + networkConsumption) * hoursOfConsumption
    return totalConsumption * 463
}