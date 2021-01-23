import {computeEmission} from "./emission-algo";

describe('Algo spec', ()=> {
    test('should return 0 given an args in not a number', () => {
        const result = computeEmission('0', 1,2)
        expect(result).toEqual(0)
    })

    test('should return the right amount of CO2 emit with smartphone', () => {
        const result = computeEmission(0, 1,2)
        expect(result).toEqual(19.64046)
    })

    test('should return the right amount of CO2 emit with tablet', () => {
        const result = computeEmission(1, 1,2)
        expect(result).toEqual(10.676779999999999)
    })
})