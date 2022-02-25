import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt="" 
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} 
                        className="settintsPPinput"
                    />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Fernando"/>
                <label>Email</label>
                <input type="email" placeholder="fernando.linares1991@gmail.com"/>
                <label>Password</label>
                <input type="text" placeholder="Fernando"/>
                <button className="settingsSubmit">
                    Update
                </button>
            </form>
            <Sidebar />
        </div>
    </div>
  );
}