const { SubmissionModel } = require("./models");

const options = { upsert: true, new: true};

const getAllUserSubmissions = async () => {
    try {
        result =  await SubmissionModel.find();
        return result;
    } catch (e) {
      console.log(e);
    }
};

const getSpecificUserSubmissions = async (name) => {
  console.log("----------- getSpecificUserSubmissions");
  try {
      result =  await SubmissionModel.find({
          name: name
      });
      return result;
  } catch (e) {
    console.log(e);
  }
};

const createUserSubmission = async ({id, name, score}) => {
    console.log("----------- createUserSubmission");
  try {
    const submission = await SubmissionModel.create({
      id,
      name,
      score,
    });
  } catch (e) {
    console.log(e);
  }
};

const deleteUserSubmission = async (id) => {
  try {
    const userPromise = SubmissionModel.findOneAndDelete({id: id});
    await Promise.all([userPromise]);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
    getAllUserSubmissions,
    getSpecificUserSubmissions,
    createUserSubmission,
    deleteUserSubmission,
};