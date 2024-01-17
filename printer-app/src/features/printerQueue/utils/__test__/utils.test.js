import {toHoursAndMinutesDisplay} from "../utils";

describe('utils', () => {
    describe('toHoursAndMinutesDisplay', () => {
        it('should return duration display', () => {
            expect(toHoursAndMinutesDisplay(3600)).toBe('1h 0m');
        });

        it('should return duration display', () => {
            expect(toHoursAndMinutesDisplay(3862)).toBe('1h 4m');
        });

        it('should return duration display', () => {
            expect(toHoursAndMinutesDisplay(0)).toBe('0h 0m');
        });
    });
});
