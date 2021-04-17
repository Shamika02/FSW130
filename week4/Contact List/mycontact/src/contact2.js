import {UPDATE_CONTACT} from '../actions/updateContact';

const contactReducer = (state ={}, {type, payload}) => {

      switch(type) {

             case UPDATE_CONTACT :

             return {name: payload}

             default :

     return state

};

};

export default contact;