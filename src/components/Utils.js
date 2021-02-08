import React, { Component, useState } from 'react';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom'
import firebase from "../firebase";
import "firebase/firestore";

//export function Utils() {

    //fields
    //  const [name, setName] = useState("");
    //  const [phone, setPhone] = useState("");
    // const history = useHistory();
    // const location = useLocation();
    // const [message, SetMessage] = useState("");
    //const db = firebase.firestore();
    // const match = useRouteMatch();

    //properties
    //methods
    //#region  copied code from Home.js 


    //* creates user object
    /*   async function createUser(role, approved) {
           db.collection("User").add({
               name: name,
               phoneNumber: phone,
               role,
               approved,
           });
       }*/
    //#endregion
//}

const UtilsObj = {
    PrintSender: function () {
        console.log(`      got url as ${window.location.pathname} inside PrintSender -> UtilsObj -> Utils.js`);
    },
    db: firebase.firestore(),
    roles: {
        manager: 'manager',
        donor: 'donor',
        client: 'client'
    },
    ValidUserDetails: async function (name, phone) {
        //fields
        
        if (phone && name ) {
            try {
                //gets user from db
                const foundUserPhone = await this.db.collection("User").where("phoneNumber", "==", phone).get();
                const foundUserName = await this.db.collection("User").where("name", "==", name).get();

                console.log(`   inside ValidUserDetails having url ${window.location.pathname}`);

                if (foundUserPhone.empty && foundUserName.empty) { // no user found, create a new one 
                    if (window.location.pathname === '/') {
                        console.log('No matching manager documents');
                        await this.createUser(name, phone, this.roles.manager, false);
                        //return;
                        // return false;
                    } else if (window.location.pathname === '/client-home') {
                        console.log('No matching client documents');
                        await this.createUser(name, phone, this.roles.client, false);
                        //return ;
                        // return false;
                    } else if (window.location.pathname === '/donor-home') {
                        console.log('No matching donor documents');
                        await this.createUser(name, phone, this.roles.donor, false);
                        //return ;
                        // return false;
                    }
                }
                
                // user found by phone. verifying his name 
                if (foundUserPhone) {
                    foundUserPhone.forEach(doc => {
                        console.log(`User No.: ${doc.id},\nDetails: `, doc.data());
                        const user = doc.data();
                        if (user) {
                            //if (window.location.pathname === '/' && user.role === 'manager') { // checks if he is a manager
                            if (user.name === name && user.phoneNumber === phone) {
                                //user verified, returning his details
                                console.log(`   Found and returned user ${user.name}`, user, `\n    @ if(foundUserPhone) -> ValidUserDetails -> UtilsObj -> Utils.js`);
                                return user;
                            }// else return /*false*/;

                           //#region 
                            /**
                             * if (user.role === 'manager' && user.approved === false) { // checks if he is approved
                                    //alert(`User ${user.name} is not approved yet`);
                                    setTextMsg(`User ${user.name} is a Manager but not approved yet`);
                                    handleOpen();
    
                                    return;
                                }
                                // user is a manager and approved
                                else {
                                    //alert(`Welcome ${user.name}`) 
                                    setTextMsg(`Welcome ${user.name}`);
                                    handleOpen();
                                    let hold = setInterval(() => {
                                        submitForm();
                                        clearInterval(hold);
                                    }, 3000);
    
    
                                }
    
        
                             */
                            //#endregion

                        } else if (!user) {
                            alert(`User data: ${user} is missing`)
                            // return false;
                           // return ;
                        }
                    });
                }else{
                    alert('ERROR-User name was found but did not match phone');
                   // return ;
                    // return false;
                }

            } catch (error) {/*return false*/ }
        } else {
            alert("יש למלא את כל הפרטים");
            //return ;
            // return false;

        }
    },

    //* creates user object
    createUser: async function (name, phone, role, approved) {
        console.log(`   got  user details`, { name, phone, role, approved }, `inside createUser -> UtilsObj -> Utils.js`);
        this.db.collection("User").add({
            name,
            phoneNumber: phone,
            role,
            approved,
        });
    }
}
export default UtilsObj;
