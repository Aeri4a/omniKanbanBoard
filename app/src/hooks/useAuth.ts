import { useSelector } from '../store';
import { userSelector } from '../store/slices/User';

const useAuth = () => useSelector(userSelector);

export default useAuth;
