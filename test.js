var should = require('should');
var goldenSort = require('./golden-sort.js');
var shuffle = require('knuth-shuffle').knuthShuffle

describe('Golden Sort Suite', function() {
  describe('getOptimalStrategyStrict', function() {
    it('should return the expected strategies', function() {
      var optimalStrategies = [
        { size:       1, strategy:       0 },
        { size:       2, strategy:       0 },
        { size:       3, strategy:       1 },
        { size:       4, strategy:       1 },
        { size:       5, strategy:       2 },
        { size:      10, strategy:       3 },
        { size:      15, strategy:       5 },
        { size:      20, strategy:       7 },
        { size:     271, strategy:     100 },
        { size:    1359, strategy:     500 },
        { size:    2718, strategy:    1000 },
        { size:   13591, strategy:    5000 },
        { size:   27182, strategy:   10000 },
        { size:  135914, strategy:   50000 },
        { size:  271828, strategy:  100000 },
        { size: 1359141, strategy:  500000 },
        { size: 2718281, strategy: 1000000 },
        { size: 5436563, strategy: 2000000 }
      ];

      optimalStrategies.forEach(function (optimalStrategy) {
        goldenSort.getOptimalStrategyStrict(optimalStrategy.size)
          .should.be.exactly(optimalStrategy.strategy);
      });
    });
  });

  describe('getOptimalStrategyLoose', function() {
    it('should return the expected strategies', function() {
      var optimalStrategies = [
        { size:       1, strategy:       0 },
        { size:       2, strategy:       1 },
        { size:       3, strategy:       1 },
        { size:       4, strategy:       1 },
        { size:       5, strategy:       2 },
        { size:      10, strategy:       4 },
        { size:      15, strategy:       6 },
        { size:      20, strategy:       7 },
        { size:     271, strategy:     100 },
        { size:    1359, strategy:     500 },
        { size:    2718, strategy:    1000 },
        { size:   13591, strategy:    5000 },
        { size:   27182, strategy:   10000 },
        { size:  135914, strategy:   50000 },
        { size:  271828, strategy:  100000 },
        { size: 1359141, strategy:  500000 },
        { size: 2718281, strategy: 1000000 },
        { size: 5436563, strategy: 2000000 }
      ];

      optimalStrategies.forEach(function (optimalStrategy) {
        goldenSort.getOptimalStrategyFast(optimalStrategy.size)
          .should.be.exactly(optimalStrategy.strategy);
      });
    });
  });

  describe('swap', function () {
    it('should swap the given positions of a given awway', function () {
      goldenSort.swap([1, 2], 0, 1).should.eql([2, 1]);
      goldenSort.swap([5, 6, 1], 2, 1).should.eql([5, 1, 6]);
    });
  });

  describe('goldenSort', function () {
    it('should be able to order arrays of integers', function () {
      var integers = [];

      for (var i = 0; i < 100; i += 1) {
        integers.push(i);
      }

      goldenSort.sort(shuffle(integers.slice(0))).should.eql(integers);
    });
  });
});
