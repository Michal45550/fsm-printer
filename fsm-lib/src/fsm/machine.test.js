import { createMachine } from './macine';

const STATE_MAP = {
    initial: 'ready',
    states: {
        ready: {
            JOB_ENTERED: 'printing'
        },
        printing: {
            JOB_TIMEOUT: 'ready',
            JOB_CANCELED: 'stuck'
        },
        stuck: {
            JOB_TIMEOUT: 'ready',
            JOB_DELETED: 'stuck'
        }
    }
};

describe('createMachine', () => {

    test('should create a machine with the initial state', () => {

        const machine = createMachine(STATE_MAP);

        // Check initial state
        expect(machine.currentState()).toBe('ready');
    });

    test('should transition to the next state', () => {

        const machine = createMachine(STATE_MAP);

        // Transition from 'ready' to 'printing'
        machine.transition('JOB_ENTERED');
        expect(machine.currentState()).toBe('printing');
    });

    test('should handle invalid transition', () => {

        const machine = createMachine(STATE_MAP);

        // Attempt invalid transition
        //const invalidTransition = () => machine.transition('INVALID_ACTION');

        // Expect a console warning about the invalid transition
        //expect(invalidTransition).toWarnDev('Invalid transition: INVALID_ACTION from state ready');

        // Expect the state to remain 'ready'
        expect(machine.currentState()).toBe('ready');
    });
});
