import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IGlobalState } from '../store';

/**
 * Utility hook that applies the global store's context against redux's
 * useSelector hook.
 * 
 * @returns {TypedUseSelectorHook<IGlobalState>}
 */
const useGlobalSelector: TypedUseSelectorHook<IGlobalState> = useSelector;
export default useGlobalSelector;