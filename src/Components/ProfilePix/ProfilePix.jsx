import "./ProfilePix.scss";
import profile_pix from "../../assets/images/profpic.jpg";

export default function ProfilePix() {
  return (
    <>
      <img className="profile-pix" src={profile_pix} alt="profile pic" />
    </>
  )
}
