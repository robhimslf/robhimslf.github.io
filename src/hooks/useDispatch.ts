import { useDispatch } from 'react-redux';
import { GlobalDispatch } from '../store';

/**
 * Utility hook that applies the global store's context against redux's
 * useDispatch hook.
 * 
 * @returns {ThunkDispatch<GlobalDispatch>}
 */
const useGlobalDispatch = () => useDispatch<GlobalDispatch>();
export default useGlobalDispatch;