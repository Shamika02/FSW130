const redux = require("redux")

function addContact(contact = 1) {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

function deleteContact(contact = 1) {
    return {
        type: "DELETE_CONTACT",
        payload: contact
    }
}

const initialState = {
    myContact:[],
    contacts: {
        
        Name:'',
        Number:'', 
 
    }
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [state.myContacts + action.payload]
            }
        case "DELETE_CONTACT":
            const updateArr = state.addContact.filter(contact => contact.name !== action.payload.name)
            return {
                ...state,
                myContact:updateArr
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact({name: 'Shamika', number:'477-898-2222'}))
store.dispatch(addContact({name: 'Roberta', number:'111-111-1111'}))
store.dispatch(deleteContact({name: 'Shamika', number:'477-898-2222'}))
