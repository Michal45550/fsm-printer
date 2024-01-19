export const createMachine = (stateMap) => {
    let state = stateMap?.initial;
    const states = stateMap?.states;

    const transition = (action) => {
        const transitions = states[state];
        const nextState = transitions[action];

        if (nextState) {
            state = nextState;
        } else {
            console.warn(`Invalid transition: ${action} from state ${state}`);
        }
        return state;
    }

    const currentState = () => state;

    return {
        transition,
        currentState
    };
}
