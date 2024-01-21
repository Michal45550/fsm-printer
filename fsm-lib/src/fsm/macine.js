export const createMachine = (stateMap) => {
    let state = stateMap?.initial;
    const states = stateMap?.states;

    const transition = (event) => {
        const transitions = states[state];
        const nextState = transitions[event];

        if (nextState) {
            state = nextState;
        } else {
            console.warn(`Invalid transition: ${event} from state ${state}`);
        }
        return state;
    }

    const currentState = () => state;

    return {
        transition,
        currentState
    };
}
