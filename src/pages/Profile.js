import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {auth, database} from "../services/firebaseConfig";
import {ref, get, child} from "firebase/database";
import classes from "../css/Profile.module.css"

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
    if (userData) return (
        <div>
            <Header/>
            <div className="container d-flex justify-content-center mt-5">
                <div className="card" className={classes.div2}>
                    <div className={classes.div1}>
                        <p className={classes.p1}>Logged in as: {auth.currentUser.email.toString()}</p>
                        <p className={classes.p1}>Hello, {userData.name.toString()}</p>
                        <p className={classes.p1}>Are you ready for your next trip?</p>
                        <p className={classes.p1}>Choose one of our destinations for an unforgettable experience!</p>
                    </div>
                </div>
                <img className={classes.img1} src='https://i.pinimg.com/564x/c1/ac/eb/c1aceb26d7866543c8e5b011c0c28d5f.jpg'></img>
            </div>
            <Footer/>
        </div>)
    else {
        return <div>Invalid user</div>
    }
}

export default Profile;




