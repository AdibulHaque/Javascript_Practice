function createProfile() {
  let details = "Profile Details";

  return {
    update: function () {
      console.log("Profile Update Process");
    },
    photoUpload: function () {
      console.log("Profile Photo Upload Process");
    },
    passwordReset: function () {
      console.log("Profile Password Reset Process");
    },
  };
}

const LearnerProfile = createProfile();
LearnerProfile.photoUpload();
