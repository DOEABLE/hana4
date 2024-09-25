import { ForwardedRef, forwardRef } from 'react';
import { useSession } from '../hooks/session-context';

const Profile = forwardRef(
  (_: unknown, ref: ForwardedRef<HTMLButtonElement>) => {
    const { session, logout } = useSession();
    return (
      <div>
        <h3>{session.loginUser?.name} Logined</h3>
        <button onClick={logout} ref={ref} className='btn btn-primary'>
          {session.loginUser?.name}Profile Sign Out
        </button>
      </div>
    );
  }
);
Profile.displayName = 'Profile';
export default Profile;
