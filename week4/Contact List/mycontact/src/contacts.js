const redux = require("redux")

function addContact(contact) {
    return {
        type: "Add_CONTACT",
        payload: contact
    }
}

function delContact(contact) {
    return {
        type: "DELETE_CONTACT",
        payload: contact
    }
}

const initialState = {
    myContact:[],
    contacts: {

       Name:"Shamika Sims",
       Number:"477-898-2222", 

       Name:"Honey Love",
       Number:"323-125-9898",

      
    
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
                myContact: updateArr
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
store.dispatch(addContact({name: "Shamika Sims", number: "477-898-0335"}))
store.dispatch(addContact({name: "Peter Pan", number: "111-111-1111"}))

store.dispatch(deleteContact({name: "Peter Pan", number: "111-111-1111"}))

