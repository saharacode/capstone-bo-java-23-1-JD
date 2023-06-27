import React, {FormEvent, useState} from 'react';
import Popup from 'reactjs-popup';
import './Popup.css';
import {LocationInfo} from "../../../model/LocationInfo";

function AddLocationPopUp() {
    const [locationName, setLocationName] = useState<string>("");
    const [locationCity, setLocationCity] = useState<string>("");
    const [locationDescription, setLocationDescription] = useState<string>("");
    const [latCoordinate, setLatCoordinate] = useState<number>(0);
    const [lngCoordinate, setLngCoordinate] = useState<number>(0);
    const [locationType, setLocationType] = useState<string>("");

    function addLocationInputHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newLocation: LocationInfo = {
            locationId: "",
            locationName: locationName,
            locationCity: locationCity,
            locationDescription: locationDescription,
            locationLatCoordinate: latCoordinate,
            locationLngCoordinate: lngCoordinate,
            locationType: locationType
        };
        console.log(newLocation);
    }

    return (
        <div>
            <Popup trigger={<button>Add location</button>}>
                <div className="popupStyle">
                    <h3>Add a new Location</h3>
                    <div className="registerFormContainer">
                        <form onSubmit={addLocationInputHandler} className="registerForm">
                            <div className="inputAndLabel">
                                <label>Name:</label>
                                <input type={"text"} onChange={event => setLocationName(event.target.value)}/>
                            </div>
                            <div className="inputAndLabel">
                                <label>Description:</label>
                                <input type={"text"} onChange={event => setLocationDescription(event.target.value)}/>
                            </div>
                            <div className="inputAndLabel">
                                <label>Type:</label>
                                <input type={"text"} onChange={event => setLocationType(event.target.value)}/>
                            </div>
                            <div className="inputAndLabel">
                                <label>City:</label>
                                <input type={"text"} onChange={event => setLocationCity(event.target.value)}/>
                            </div>
                            <div className="inputAndLabel">
                                <label>Lat Coordinate:</label>
                                <input type={"number"} onChange={event => setLatCoordinate(parseFloat(event.target.value))}/>
                            </div>
                            <div className="inputAndLabel">
                                <label>Lng Coordinate:</label>
                                <input type={"number"} onChange={event => setLngCoordinate(parseFloat(event.target.value))}/>
                            </div>
                            <button type={"submit"}>Add</button>
                        </form>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

export default AddLocationPopUp;