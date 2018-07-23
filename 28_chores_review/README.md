Using json-server:
to install:
  `npm install -g json-server`
to start server:
  `json-server --watch db.json`

# Deliverables
  - get some chores, put chores on page
  - make a new chore
  - delete a chore
  - change the priority
  - what am i doing to my db
  - what am i doing to the dom

# Flow
  - when dom content loads, adapter requests all chores
  - instantiate chores into our chore objects
  - puts chores on dom

  ```{
    "chores": [
      {
        "id": 1,
        "title": "Wash Dishes",
        "priority": "Important",
        "duration": "15min"
      },
      {
        "id": 2,
        "title": "Fix Bed",
        "priority": "Can Wait",
        "duration": "3min"
      },
      {
        "id": 3,
        "title": "Catch Matt doing weird things",
        "priority": "MOI IMPORTANTE",
        "duration": "however long it takes"
      }
    ]
  }
  ```
