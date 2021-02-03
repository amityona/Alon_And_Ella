import React, { Component, useState } from 'react';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom'
import firebase from "../firebase";
import "firebase/firestore";


export default function Utils() {

    //fields
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const history = useHistory();
    const match = useRouteMatch();
    const location = useLocation();
    const [message, SetMessage] = useState("");
    const db = firebase.firestore();

    //properties
    //methods


    //#region  copied code from Home.js //todo need to sort it out and clear what I don't need ◀⬅⬅⬅⬅⬅

    async function checkUserDetails(phone) {
        if (phone) {
            try {
                //gets user from db
                const foundUser = await db.collection("User").where("phoneNumber", "==", phone).get();
                const currentUrl = match.url;

                if (foundUser.empty) { // no user found, create a new one 
                    if (currentUrl === '/') {
                        console.log('No matching documents');
                        await createUser('manager', false);
                        return false;
                    }
                }

                // user found. checking his details 
                foundUser.forEach(doc => {
                    console.log(`User No.: ${doc.id},\nDetails: `, doc.data());
                    const user = doc.data();
                    if (user) {
                        if (currentUrl === '/' && user.role === 'manager') { // checks if he is a manager
                            //alert(`User ${user.name} is defined as a Manager. checking if approved`);
                            setTextMsg(`User ${user.name} is defined as a Manager. checking if approved`);
                            handleOpen();
                        } else {
                            setTextMsg(`User ${user.name} is not defined as a Manager`);
                            handleOpen();
                            return;
                        }


                        if (user.role === 'manager' && user.approved === false) { // checks if he is approved
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
                    } else if (!user) {
                        alert(`User data: ${user} is missing`)
                    }
                });

            } catch (error) { }
        } else {
            alert("יש למלא את כל הפרטים");
        }
    }


    //* creates user object
    async function createUser(role, approved) {
        db.collection("User").add({
            name: name,
            phoneNumber: phone,
            role,
            approved,
        });
    }
    //#endregion

}
