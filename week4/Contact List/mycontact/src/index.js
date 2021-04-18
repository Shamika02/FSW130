const redux = require("redux")

function addContact(contact) {
    return {
        type: "Add_CONTACT",
        payload: contact
    }
}

function deleteContact(contact) {
    return {
        type: "DELETE_CONTACT",
        payload: contact
    }
}

const initialState = {
    myContact:[],
    contacts: {

       Name1:"Shamika Sims",
       NumberA:"477-898-2222", 

       Name2:"Honey Love",
       NumberB:"323-125-9898",
    
    }
}


function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: action.payload,
                myContact: [...state.myContact, action.payload]
            }
        case "DELETE_CONTACT":{
            const updatedArr = state.addContact.filter(contact => contact.name !== action.payload.name)
            return {
                ...state,
                myContact: updatedArr
            }
        }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})
