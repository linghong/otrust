import { bnReducerCallback, stringReducerCallback } from 'context/reducerCallback'


export function exchStringReducer(state, action) {
    switch (action.type) {
        case 'bidDenom':
            try { 
                update = stringReducerCallback(
                    state[action.type], 
                    action.type, 
                    action.value, 
                    update
                )
            } catch(e) {
                console.log(e)
            }
            break
        case 'input':
            try { 
                update = stringReducerCallback(
                    state[action.type], 
                    action.type, 
                    action.value, 
                    update
                )
            } catch(e) {
                console.log(e)
            }
            break
        case 'output':
            try { 
                update = stringReducerCallback(
                    state[action.type], 
                    action.type, 
                    action.value, 
                    update
                )
            } catch(e) {
                console.log(e)
            }
            break
        case 'strong':
            try { 
                update = stringReducerCallback(
                    state[action.type], 
                    action.type, 
                    action.value, 
                    update
                )
            } catch(e) {
                console.log(e)
            }
            break
        case 'weak':
            try { 
                update = stringReducerCallback(
                    state[action.type], 
                    action.type, 
                    action.value, 
                    update
                )
            } catch(e) {
                console.log(e)
            }
            break
        case 'update':
            var update = state
            for (let [key, value] of action.value.entries()) {
                if(state[key]) { 
                    switch (key) {
                        case 'bidDenom':
                            try { 
                                update = stringReducerCallback(
                                    state[key], 
                                    key, 
                                    value, 
                                    update
                                )
                            } catch(e) {
                                console.log(e)
                            }
                            break

                        case 'input':
                            try { 
                                update = stringReducerCallback(
                                    state[key], 
                                    key, 
                                    value, 
                                    update
                                )
                            } catch(e) {
                                console.log(e)
                            }
                            break

                        case 'output':
                            try {
                                update = stringReducerCallback(
                                    state[key], 
                                    key, 
                                    value, 
                                    update
                                )
                            } catch(e) {
                                console.log(e)
                            }
                            break
                        case 'strong':
                            try {
                                update = stringReducerCallback(
                                    state[key], 
                                    key, 
                                    value, 
                                    update
                                )
                            } catch(e) {
                                console.log(e)
                            }
                            break
                        case 'weak':
                            try {
                                update = stringReducerCallback(
                                    state[key], 
                                    key, 
                                    value, 
                                    update
                                )
                            } catch(e) {
                                console.log(e)
                            }
                            break
                        default:
                            throw new Error();
                    }    
                }   
            }
            if (update) {
                return {
                    ...update
                }
            }
            break
        default:
            throw new Error();
    }
}



export function exchBnReducer(state, action) {
    var update = state

    switch (action.type) {
        case 'askAmount':
            try { 
                update = bnReducerCallback(
                    state[action.type], 
                    action.type, 
                    action.value, 
                    update
                )
            } catch(e) {
                console.log(e)
            }
            break
        case 'bidAmount':
            try { 
                update = bnReducerCallback(
                    state[action.type], 
                    action.type, 
                    action.value, 
                    update
                )
            } catch(e) {
                console.log(e)
            }
            break
        case 'slippage':
            try { 
                update = bnReducerCallback(
                    state[action.type], 
                    action.type, 
                    action.value, 
                    update
                )
            } catch(e) {
                console.log(e)
            }
            break
        case 'update':
            for (let [key, value] of action.value.entries()) {
                if(state[key]) { 
                    switch (key) {
                        case 'askAmount':
                            try { 
                                update = bnReducerCallback(
                                    state[key], 
                                    key, 
                                    value, 
                                    update
                                )
                            } catch(e) {
                                console.log(e)
                            }
                            break

                        case 'bidAmount':
                            try {
                                update = bnReducerCallback(
                                    state[key], 
                                    key, 
                                    value, 
                                    update
                                )
                            } catch(e) {
                                console.log(e)
                            }
                            break
                        case 'slippage':
                            try {
                                update = bnReducerCallback(
                                    state[key], 
                                    key, 
                                    value, 
                                    update
                                )
                            } catch(e) {
                                console.log(e)
                            }
                            break
                        default:
                            throw new Error();
                    }    
                }   
            }
            if (update) {
                return {
                    ...update
                }
            }
            break
        default:
            throw new Error();
    }
}