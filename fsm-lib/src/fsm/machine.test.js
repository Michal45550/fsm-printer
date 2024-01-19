import { createMachine } from './macine';

const STATE_MAP = {
    initial: "ready",
    states: {
        ready: {
            JOB_ENTERED: "printing"
        },
        printing: {
            JOB_EXIT: "ready",
            JOB_STOPPED: "stuck",
        },
        stuck: {
            JOB_EXIT: "ready",
        }
    }
};

describe('createMachine', () => {

    const machine = createMachine(STATE_MAP);

    test('should create a machine with the initial state', () => {
        expect(machine.currentState()).toBe('ready');
    });

    test('should handle invalid transition', () => {

        // Use jest.spyOn to mock console.warn
        const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

        // Perform an invalid transition
        machine.transition('JOB_STOPPED');

        // Assert that console.warn was called with the expected message
        expect(consoleWarnSpy).toHaveBeenCalledWith(
            expect.stringContaining('Invalid transition: JOB_STOPPED from state ready')
        );

        // Restore the original console.warn implementation
        consoleWarnSpy.mockRestore();

        // Expect the state to remain 'ready'
        expect(machine.currentState()).toBe('ready');
    });

    test('should transition to the next state', () => {
        // Transition from 'ready' to 'printing'
        machine.transition('JOB_ENTERED');
        expect(machine.currentState()).toBe('printing');
    });

});
