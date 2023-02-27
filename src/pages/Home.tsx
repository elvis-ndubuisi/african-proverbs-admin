import { LandingTitle, LandingSubTitle } from "../components/ui/Typography";
import { ButtonNormal, ButtonNormalSecondary } from "../components/ui/Buttons";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="grid place-items-center place-content-center gap-2">
      <hgroup>
        <LandingTitle>African proverbs Admin</LandingTitle>
        <LandingSubTitle>Notes</LandingSubTitle>
      </hgroup>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <ButtonNormal>
          <Link to="/account/register">Join Admins</Link>
        </ButtonNormal>
        <ButtonNormalSecondary>
          <Link to="/account/login">Login to Account</Link>
        </ButtonNormalSecondary>
      </div>
    </div>
  );
}
