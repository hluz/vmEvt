Plans = new Mongo.Collection('plans');

Template.Page_home.viewmodel({
  plan: function() {
    return Plans.findOne({cd:"A"})
  }
});
Template.PlanStep.viewmodel({
  deleteStep: function() {
    Plans.update({_id: this.parent().plan()._id}, {
      $pull: {
        steps: {
          _id: this._id()
        }
      }
    });
  }
});
Template.AddPlanStep.viewmodel({
  createStep: function() {
    Plans.update({_id: this._id()}, {
      $push: {
        steps: {
          _id: Random.id(),
          desc: this.desc()
        }
      }
    });
  }
});
