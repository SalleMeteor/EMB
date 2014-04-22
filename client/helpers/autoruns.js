Deps.autorun(function () {
 
  if (Meteor.status().connected) {
    console.log("connected");
  } else {
    console.log("disconnected");
  }
 
});

Deps.autorun(function () {
  console.log("currentPage variable = ", Session.get("currentPage"));
});