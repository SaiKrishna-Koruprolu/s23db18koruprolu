"use strict";

var ship = require('../models/ship'); // List of all ships


exports.ship_list = function (req, res) {
  res.send('NOT IMPLEMENTED: ship list');
}; // for a specific ship. 


exports.ship_detail = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("detail" + req.params.id);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(ship.findById(req.params.id));

        case 4:
          result = _context.sent;
          res.send(result);
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.status(500);
          res.send("{\"error\": document for id ".concat(req.params.id, " not found"));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.ship_list = function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(ship.find());

        case 3:
          theships = _context2.sent;
          res.send(theships);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500);
          res.send("{\"error\": ".concat(_context2.t0, "}"));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Handle ship create on POST.


exports.ship_create_post = function _callee3(req, res) {
  var document, _result;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(req.body);
          document = new ship();
          document.Model = req.body.Model;
          document.yearofmanufacturing = req.body.yearofmanufacturing;
          document.color = req.body.color;
          _context3.prev = 5;
          _context3.next = 8;
          return regeneratorRuntime.awrap(document.save());

        case 8:
          _result = _context3.sent;
          res.send(_result);
          _context3.next = 16;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](5);
          res.status(500);
          res.send("{\"error\": ".concat(_context3.t0, "}"));

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[5, 12]]);
}; // Handle ship delete form on DELETE.


exports.ship_delete = function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log("delete " + req.params.id);
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(ship.findByIdAndDelete(req.params.id));

        case 4:
          result = _context4.sent;
          console.log("Removed " + result);
          res.send(result);
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](1);
          res.status(500);
          res.send("{\"error\": Error deleting ".concat(_context4.t0, "}"));

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 9]]);
}; //Handle ship update form on PUT


exports.ship_update_put = function _callee5(req, res) {
  var toUpdate, _result2;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log("update on id ".concat(req.params.id, " with body\n    ").concat(JSON.stringify(req.body)));
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(ship.findById(req.params.id));

        case 4:
          toUpdate = _context5.sent;
          // Do updates of properties
          if (req.body.ship) toUpdate.Model = req.body.Model;
          if (req.body.yearofmanufacturing) toUpdate.yearofmanufacturing = req.body.yearofmanufacturing;
          if (req.body.color) toUpdate.color = req.body.color;
          _context5.next = 10;
          return regeneratorRuntime.awrap(toUpdate.save());

        case 10:
          _result2 = _context5.sent;
          console.log("Sucess " + _result2);
          res.send(_result2);
          _context5.next = 19;
          break;

        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](1);
          res.status(500);
          res.send("{\"error\": ".concat(_context5.t0, ": Update for id ").concat(req.params.id, "\n    failed"));

        case 19:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 15]]);
}; // VIEWS
// Handle a show all view


exports.ship_view_all_Page = function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(ship.find());

        case 3:
          theships = _context6.sent;
          res.render('ship', {
            title: 'ship Search Results',
            results: theships
          });
          _context6.next = 11;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          res.status(500);
          res.send("{\"error\": ".concat(_context6.t0, "}"));

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Handle ship delete on DELETE. 


exports.ship_delete = function _callee7(req, res) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          console.log("delete " + req.params.id);
          _context7.prev = 1;
          _context7.next = 4;
          return regeneratorRuntime.awrap(ship.findByIdAndDelete(req.params.id));

        case 4:
          result = _context7.sent;
          console.log("Removed " + result);
          res.send(result);
          _context7.next = 13;
          break;

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](1);
          res.status(500);
          res.send("{\"error\": Error deleting ".concat(_context7.t0, "}"));

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[1, 9]]);
}; // Handle a show one view with id specified by query 


exports.ship_view_one_Page = function _callee8(req, res) {
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          console.log("single view for id " + req.query.id);
          _context8.prev = 1;
          _context8.next = 4;
          return regeneratorRuntime.awrap(ship.findById(req.query.id));

        case 4:
          result = _context8.sent;
          res.render('shipdetail', {
            title: 'ship Detail',
            toShow: result
          });
          _context8.next = 12;
          break;

        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](1);
          res.status(500);
          res.send("{'error': '".concat(_context8.t0, "'}"));

        case 12:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Handle building the view for creating a ship. 
// No body, no in path parameter, no query. 
// Does not need to be async 


exports.ship_create_Page = function (req, res) {
  console.log("create view");

  try {
    res.render('shipcreate', {
      title: 'ship Create'
    });
  } catch (err) {
    res.status(500);
    res.send("{'error': '".concat(err, "'}"));
  }
}; // Handle building the view for updating a ship. 
// query provides the id 


exports.ship_update_Page = function _callee9(req, res) {
  var _result3;

  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          console.log("update view for item " + req.query.id);
          _context9.prev = 1;
          _context9.next = 4;
          return regeneratorRuntime.awrap(ship.findById(req.query.id));

        case 4:
          _result3 = _context9.sent;
          res.render('shipupdate', {
            title: 'ship Update',
            toShow: _result3
          });
          _context9.next = 12;
          break;

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](1);
          res.status(500);
          res.send("{'error': '".concat(_context9.t0, "'}"));

        case 12:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Handle a delete one view with id from query 


exports.ship_delete_Page = function _callee10(req, res) {
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          console.log("Delete view for id " + req.query.id);
          _context10.prev = 1;
          _context10.next = 4;
          return regeneratorRuntime.awrap(ship.findById(req.query.id));

        case 4:
          result = _context10.sent;
          res.render('shipdelete', {
            title: 'ship Delete',
            toShow: result
          });
          _context10.next = 12;
          break;

        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](1);
          res.status(500);
          res.send("{'error': '".concat(_context10.t0, "'}"));

        case 12:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // for a specific ship.


exports.ship_detail = function _callee11(req, res) {
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          console.log("detail" + req.params.id);
          _context11.prev = 1;
          _context11.next = 4;
          return regeneratorRuntime.awrap(ship.findById(req.params.id));

        case 4:
          result = _context11.sent;
          res.send(result);
          _context11.next = 12;
          break;

        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](1);
          res.status(500);
          res.send("{\"error\": document for id ".concat(req.params.id, " not found"));

        case 12:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Handle a show one view with id specified by query


exports.ship_view_one_Page = function _callee12(req, res) {
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          console.log("single view for id " + req.query.id);
          _context12.prev = 1;
          _context12.next = 4;
          return regeneratorRuntime.awrap(ship.findById(req.query.id));

        case 4:
          result = _context12.sent;
          res.render('shipdetail', {
            title: 'ship Detail',
            toShow: result
          });
          _context12.next = 12;
          break;

        case 8:
          _context12.prev = 8;
          _context12.t0 = _context12["catch"](1);
          res.status(500);
          res.send("{'error': '".concat(_context12.t0, "'}"));

        case 12:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Handle building the view for creating a ship.
// No body, no in path parameter, no query.
// Does not need to be async


exports.ship_create_Page = function (req, res) {
  console.log("create view");

  try {
    res.render('shipcreate', {
      title: 'ship Create'
    });
  } catch (err) {
    res.status(500);
    res.send("{'error': '".concat(err, "'}"));
  }
}; // Handle building the view for updating a ship.
// query provides the id


exports.ship_update_Page = function _callee13(req, res) {
  var _result4;

  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          console.log("update view for item " + req.query.id);
          _context13.prev = 1;
          _context13.next = 4;
          return regeneratorRuntime.awrap(ship.findById(req.query.id));

        case 4:
          _result4 = _context13.sent;
          res.render('shipupdate', {
            title: 'ship Update',
            toShow: _result4
          });
          _context13.next = 12;
          break;

        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](1);
          res.status(500);
          res.send("{'error': '".concat(_context13.t0, "'}"));

        case 12:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Handle a delete one view with id from query


exports.ship_delete_Page = function _callee14(req, res) {
  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          console.log("Delete view for id " + req.query.id);
          _context14.prev = 1;
          _context14.next = 4;
          return regeneratorRuntime.awrap(ship.findById(req.query.id));

        case 4:
          result = _context14.sent;
          res.render('shipdelete', {
            title: 'ship Delete',
            toShow: result
          });
          _context14.next = 12;
          break;

        case 8:
          _context14.prev = 8;
          _context14.t0 = _context14["catch"](1);
          res.status(500);
          res.send("{'error': '".concat(_context14.t0, "'}"));

        case 12:
        case "end":
          return _context14.stop();
      }
    }
  }, null, null, [[1, 8]]);
};
//# sourceMappingURL=ship.dev.js.map
