import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {auth, database} from "../services/firebaseConfig";
import {ref, get, child} from "firebase/database";
import "../css/Profile.module.css"

function Profile() {
    const [userData, setUserData] = useState();
    useEffect(() => {
        const userId = auth.currentUser.uid;
        const dbRef = ref(database);
        get(child(dbRef, `users/${userId}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setUserData(snapshot.val());
                }
            })
    }, [])
    console.log(userData)
    if (userData) return (<div>
            <Header/>
            <div>
                Login in as: <strong>{auth.currentUser.email}</strong>
            </div>
            <div className="container d-flex justify-content-center mt-5">
                <div className="card">
                    <div className="top-container">
                        <div className="ml-3">
                            <p>{userData.name.toString()}</p>
                            <p className="mail">{userData.email.toString()}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>); else {
        return <div></div>
    }
}

export default Profile;




