const { UserModel } = require("./models");

const options = { upsert: true, new: true};

const getSpecificUserAccount = async (email) => {
    try {
        result =  await UserModel.find({
            email: email
        });
        return result;
    } catch (e) {
      console.log(e);
    }
};

const createUserAccount = async ({name, email}) => {
  try {
    const submission = await UserModel.create({
      name,
      email,
    });
  } catch (e) {
    console.log(e);
  }
};

const deleteUserAccount = async (email) => {
  try {
    const userPromise = SubmissionModel.UserModel({email: email});
    await Promise.all([userPromise]);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
    getSpecificUserAccount,
    createUserAccount,
    deleteUserAccount,
};