var express = require('express')
  , cors = require('cors')
  , app = express();

var corsOptions = {
  origin: 'http://127.0.0.1:9000',
  credentials: true
};

app.use(cors());
 
app.get('/organizations', cors(corsOptions), function(req, res) {
    res.send([
      {"id":1,"name":"Enspiral Services","current_round_id":1},
      {"id":2,"name":"Enspiral Foundation","current_round_id":null}
    ]);
});
app.get('/round/:id', cors(corsOptions), function(req, res) {
    res.send(
    	{
        "round": {
            "id": 1,
            "budget": {
                "id": 1,
                "name": "Enspiral Services",
                "current_round_id": 1
            },
            "round_projects": [
                {
                    "project": {
                        "id": 1,
                        "name": "Fund Cobudget Development",
                        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit sapien, tempor eu auctor a, fermentum et ante. Sed non metus ut ipsum ullamcorper mollis nec volutpat odio. In ac justo nec mauris interdum dapibus. Aliquam sit amet nisi eleifend, luctus lacus eu, lobortis urna. Nullam eleifend hendrerit nisi, sed tempor risus eleifend nec. Sed sagittis vulputate turpis, eu dictum augue euismod ut. Praesent tincidunt felis id lacinia sodales. Etiam mollis vel quam vitae lobortis. Etiam iaculis est vitae neque gravida elementum. Maecenas dui est, rutrum eget fringilla vitae, posuere non nisi. Sed vel condimentum lorem.\n\nNulla dictum dignissim nibh, non consequat magna sollicitudin et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fringilla neque at placerat commodo. Mauris et maximus massa. Phasellus condimentum iaculis hendrerit. Nam sodales sed felis id molestie. Curabitur interdum sagittis dolor nec laoreet. Vivamus accumsan turpis in commodo auctor. Sed commodo, sapien in tristique hendrerit, lectus lectus interdum ex, at eleifend metus tortor ac nisl. Proin urna nisl, eleifend et augue ut, pellentesque vestibulum ante. Proin id sagittis metus, eu tristique orci. Duis gravida, erat non lobortis posuere, eros nunc auctor tellus, in pellentesque turpis est ac purus. Maecenas mattis consequat velit faucibus hendrerit. Nulla facilisi.\n\nSuspendisse potenti. Nunc luctus lobortis dapibus. Mauris finibus rutrum sem vel semper. Sed aliquam, urna id convallis ullamcorper, tortor tortor commodo nisi, sit amet sagittis felis enim vel ligula. Nulla nec tempus nisi. Sed hendrerit commodo elit, et iaculis lectus condimentum in. Curabitur imperdiet leo sit amet libero viverra suscipit. In enim leo, ullamcorper id nibh dictum, sollicitudin finibus velit. Cras convallis iaculis placerat. Praesent facilisis vehicula posuere. Vestibulum rhoncus vulputate felis id egestas. Quisque dapibus orci lacus, eu dapibus sem finibus eu. Integer congue velit sit amet fringilla lacinia. Duis congue augue nisi, quis dignissim purus ullamcorper vel. Ut sapien augue, ultrices sit amet odio sed, consequat laoreet ante. ",
                        "created_at": "2014-09-10T23:32:12.147Z",
                        "min_cents": 20000,
                        "target_cents": 50000,
                        "max_cents": 100000
                    },
                    "bucket": {
                        "id": 1,
                        "allocation_total_cents": 20000,
                        "allocations": [
                            {
                                "amount_cents": 20000,
                                "created_at": "2014-09-10T23:50:27.486Z",
                                "updated_at": "2014-09-10T23:54:27.665Z",
                                "allocator": {
                                    "id": 1,
                                    "name": "Craig"
                                }
                            }
                        ]
                    }
                },

                {
                    "project": {
                        "id": 2,
                        "name": "Fund API Redesign",
                        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit sapien, tempor eu auctor a, fermentum et ante. Sed non metus ut ipsum ullamcorper mollis nec volutpat odio. In ac justo nec mauris interdum dapibus. Aliquam sit amet nisi eleifend, luctus lacus eu, lobortis urna. Nullam eleifend hendrerit nisi, sed tempor risus eleifend nec. Sed sagittis vulputate turpis, eu dictum augue euismod ut. Praesent tincidunt felis id lacinia sodales. Etiam mollis vel quam vitae lobortis. Etiam iaculis est vitae neque gravida elementum. Maecenas dui est, rutrum eget fringilla vitae, posuere non nisi. Sed vel condimentum lorem.\n\nNulla dictum dignissim nibh, non consequat magna sollicitudin et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fringilla neque at placerat commodo. Mauris et maximus massa. Phasellus condimentum iaculis hendrerit. Nam sodales sed felis id molestie. Curabitur interdum sagittis dolor nec laoreet. Vivamus accumsan turpis in commodo auctor. Sed commodo, sapien in tristique hendrerit, lectus lectus interdum ex, at eleifend metus tortor ac nisl. Proin urna nisl, eleifend et augue ut, pellentesque vestibulum ante. Proin id sagittis metus, eu tristique orci. Duis gravida, erat non lobortis posuere, eros nunc auctor tellus, in pellentesque turpis est ac purus. Maecenas mattis consequat velit faucibus hendrerit. Nulla facilisi.\n\nSuspendisse potenti. Nunc luctus lobortis dapibus. Mauris finibus rutrum sem vel semper. Sed aliquam, urna id convallis ullamcorper, tortor tortor commodo nisi, sit amet sagittis felis enim vel ligula. Nulla nec tempus nisi. Sed hendrerit commodo elit, et iaculis lectus condimentum in. Curabitur imperdiet leo sit amet libero viverra suscipit. In enim leo, ullamcorper id nibh dictum, sollicitudin finibus velit. Cras convallis iaculis placerat. Praesent facilisis vehicula posuere. Vestibulum rhoncus vulputate felis id egestas. Quisque dapibus orci lacus, eu dapibus sem finibus eu. Integer congue velit sit amet fringilla lacinia. Duis congue augue nisi, quis dignissim purus ullamcorper vel. Ut sapien augue, ultrices sit amet odio sed, consequat laoreet ante. ",
                        "created_at": "2014-09-10T23:32:12.147Z",
                        "min_cents": 20000,
                        "target_cents": 50000,
                        "max_cents": 100000
                    },
                    "bucket": {
                        "id": 2,
                        "allocation_total_cents": 20000,
                        "allocations": [
                            {
                                "amount_cents": 20000,
                                "created_at": "2014-09-10T23:50:27.486Z",
                                "updated_at": "2014-09-10T23:54:27.665Z",
                                "allocator": {
                                    "id": 2,
                                    "name": "Derek"
                                }
                            }
                        ]
                    }
                }
            ]
        }
      }
    );
});

app.get('/bucket/:id', cors(corsOptions), function(req, res) {
    res.send(
        {
          "bucket": {
              "id": 1,
              "name": "Fund Cobudget Development",
              "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sit amet fringilla lacinia. Duis congue augue nisi, quis dignissim purus ullamcorper vel. Ut sapien augue, ultrices sit amet odio sed, consequat laoreet ante. ",
              "created_at": "2014-09-10T23:32:12.147Z",
              "min_cents": 20000,
              "target_cents": 50000,
              "max_cents": 100000, 
              "allocation_total_cents": 20000,
              "allocations": [
                  {
                      "amount_cents": 20000,
                      "created_at": "2014-09-10T23:50:27.486Z",
                      "updated_at": "2014-09-10T23:54:27.665Z",
                      "allocator": {
                          "id": 1,
                          "name": "Craig"
                      }
                  }
              ]
          }
        }
    );
});
 
app.listen(3000);
console.log('Listening on port 3000...');