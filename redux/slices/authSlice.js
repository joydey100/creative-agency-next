import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import firebaseInitialize from "../../Firebase/firebase-init";

// Firebase Initialized
firebaseInitialize();

// Provider and auth
const provider = new GoogleAuthProvider();
const auth = getAuth();

// google Login Auth
export const authGoogleLogin = createAsyncThunk(
  "auth/authGoogleLogin",
  async () => {
    const result = await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        return user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });

    return result;
  }
);

// Google Log Out
export const logOut = createAsyncThunk("auth/logOut", async () => {
  const result = signOut(auth)
    .then(() => {
      return "success";
    })
    .catch((error) => {
      return "error";
    });

  return result;
});

// Register with Email, password
export const authRegister = createAsyncThunk(
  "auth/authRegister",
  async (obj) => {
    const result = await createUserWithEmailAndPassword(
      auth,
      obj?.email,
      obj?.password
    )
      .then((userCredential) => {
        let user = userCredential.user;

        // Update Profile with register
        updateProfile(auth.currentUser, {
          displayName: obj.name,
        })
          .then(() => {
            // user.displayName = obj.name;
          })
          .catch((error) => {});

        return user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });

    return { result, name: obj?.name };
  }
);

// Login with Email
export const authLoginEmail = createAsyncThunk(
  "auth/authLoginEmail",
  async (obj) => {
    const result = await signInWithEmailAndPassword(
      auth,
      obj.email,
      obj.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
    console.log(result);
    return result;
  }
);

// Auth Slice
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    loading: false,
    error: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // Google Login
    builder.addCase(authGoogleLogin.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    // Log Out
    builder.addCase(logOut.fulfilled, (state, action) => {
      if (action.payload === "success") {
        state.user = {};
      }
    });
    // Register Email Password

    builder.addCase(authRegister.fulfilled, (state, action) => {
      state.user = action.payload.result;
      state.user.displayName = action.payload.name;
    });
    // Login Email Password
    builder.addCase(authLoginEmail.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { authGoogleLogin } = authSlice.actions;

export default authSlice.reducer;
