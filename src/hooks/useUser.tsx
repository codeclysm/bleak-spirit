import {
  Auth,
  signInAnonymously as firebaseSignInAnonymously,
  User,
} from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function useUser(
  auth: Auth
): [User | null | undefined, Error | undefined] {
  const [internalLoading, setInternalLoading] = useState<boolean>(false);

  const [authUser, authLoading, authError] = useAuthState(auth, {
    onUserChanged: async () => {
      setInternalLoading(false);
    },
  });

  const signInAnonymously = useCallback(async () => {
    return await firebaseSignInAnonymously(auth);
  }, [auth]);

  useEffect(() => {
    if (!authLoading && !authError && !authUser && !internalLoading) {
      setInternalLoading(true);
      signInAnonymously().catch((err) => console.error(err));
    }
  }, [authError, authLoading, authUser, internalLoading, signInAnonymously]);

  return [authUser, authError];
}
