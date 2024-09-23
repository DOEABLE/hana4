import { ForwardedRef, forwardRef } from 'react';
import { Session } from '../App';
import Button from './atoms/Button';

type Props = {
  session: Session;
  logout: () => void;
};

const Profile = forwardRef(
  ({ session, logout }: Props, ref:ForwardedRef<HTMLButtonElement>) =>{
  return (
    <div>
      <h3>{session.loginUser?.name} Logined</h3>
      <button onClick={logout} ref={ref} className='btn btn-primary'>
        Profile Sign Out
      </button>
    </div>
  );
});
Profile.displayName = 'Profile';
export default Profile;