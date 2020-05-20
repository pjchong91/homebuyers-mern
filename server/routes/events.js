const router = require("express").Router();
let Event = require("../models/event.model");

router.route("/").get((req, res) => {
  Event.find()
    .then((event) => res.json(event))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Event.findById(req.params.id)
    .then((event) => res.json(event))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Event.findById(req.params.id)
    .then((event) => {
      event.username = req.body.username;
      event.description = req.body.description;
      event.value = req.body.value;
      event.date = Date.parse(req.body.date);

      event
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            id: event._id,
            message: "Income event updated",
          });
        })
        .catch((err) => {
          return res.status(404).json({
            err,
            message: "Income event failed to update",
          });
        });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  console.log(req, "therequrszS");
  const username = req.body.username;
  const description = req.body.description;
  const value = req.body.value;
  console.log(req.body.date, "wotdurreqsbodydate???");
  const date = Date.parse(req.body.date); // Enter date as mo/d/yr

  const newEvent = new Event({ username, description, value, date });

  newEvent
    .save()
    .then(() => res.json("Event added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json("Event deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
