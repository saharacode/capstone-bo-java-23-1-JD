import React, {Dispatch, SetStateAction} from 'react';
import {useNavigate} from "react-router-dom";
import Mapcomponent from "./Mapcomponent/Mapcomponent";
import {LocationInfo} from "../../model/LocationInfo";
import {User} from "../../model/User";
import AddLocationPopUp from "./AddLocationPopUp/AddLocationPopUp";

type Props = {
    postLogout: () => Promise<void>;
    getUserDetails: (username:string) => Promise<void>;
    user?: string;
    setUser: Dispatch<SetStateAction<string | undefined>>;
    locations: LocationInfo[];
    setLocations: Dispatch<SetStateAction<LocationInfo[]>>;
    getAllLocationsForUser: (username:string) => Promise<void>;
    setUserDetails: Dispatch<SetStateAction<User>>;
    emptyUser: User;
    postNewLocation: (username: string, newLocation: LocationInfo, setLocations: Dispatch<SetStateAction<LocationInfo[]>>) => Promise<void>;
}

function Mainpage(props:Props) {
    const nav = useNavigate();

    function logoutButtonHandler() {
        // eslint-disable-next-line
        props.postLogout();
        props.setUserDetails(props.emptyUser);
        props.setUser(undefined);
        props.setLocations([]);
        nav("/");
    }

    function profileButtonHandler() {
        if (props.user !== undefined){
            // eslint-disable-next-line

            props.getUserDetails(props.user);
            nav("/profile");
        }
    }

    function getLocationsButtonHandler() {
        if (props.user !== undefined){
            // eslint-disable-next-line
            props.getAllLocationsForUser(props.user);
        }
    }

    return (
        <div>
            <div>
                <h2>Welcome to the mainpage</h2>
                <button onClick={profileButtonHandler}>Profile</button>
                <button onClick={logoutButtonHandler}>Logout</button>
                <button onClick={getLocationsButtonHandler}>Get locations</button>
            </div>
            <div>
                <AddLocationPopUp
                    postNewLocation={props.postNewLocation}
                    user={props.user}
                    setLocations={props.setLocations}/>
            </div>
            <Mapcomponent locations={props.locations}
                          setLocations={props.setLocations}
                          user={props.user}/>
        </div>
    );
}

export default Mainpage;