import Resolutions from "./resolutions";

// Resolutions.insert({
//   name: "Test Resolution"
// });

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    }
  }
};
