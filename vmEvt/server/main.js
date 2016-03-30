Plans = new Mongo.Collection('plans');

Meteor.startup(() => {
  console.log("Starting up Server");
  if (!Plans.find().count()) {
    Plans.insert({cd:"A",name:"Plan A", steps: [
      {_id:Random.id(), desc:"Step 1" },
      {_id:Random.id(), desc:"Step 2" },
      {_id:Random.id(), desc:"Step 3" },
      {_id:Random.id(), desc:"Step 4" }
    ]});
  }
});
