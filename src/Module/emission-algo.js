import {getKwhByDeviceId} from "../Sdk/device-kwh";
import {getKwhByNetworkId} from "../Sdk/network-kwh";
const rateToCO2 = 463

export function computeEmission (networkType, deviceType, hoursOfConsumption) {
    if(!Number.isInteger(networkType) || !Number.isInteger(deviceType) || !Number.isInteger(hoursOfConsumption)) {
        return 0
    }
    const [deviceConsumption, networkConsumption] = [
        getKwhByDeviceId(deviceType),
        getKwhByNetworkId(networkType)
    ];
    const totalConsumption = (deviceConsumption.val + networkConsumption.val) * hoursOfConsumption
    return totalConsumption * rateToCO2
}