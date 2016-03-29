var CustomSet = require('./custom-set');

describe('CustomSet', function() {
  it('can compare equality of identical sets', function(){
    var subject = new CustomSet([3, 2, 1]);
    var duplicateSubject = new CustomSet([3, 2, 1]);

    expect(subject.eql(duplicateSubject)).toBe(true);
  });

  it('can compare equality of unordered by similar sets', function(){
    var subject = new CustomSet([3, 2, 1]);
    var unOrderedDuplicateSubject = new CustomSet([3, 1, 2]);

    expect(subject.eql(unOrderedDuplicateSubject)).toBe(true);
  });

  it('can compare equality of different sets where the second is smaller', function(){
    var subject = new CustomSet([3, 2, 1]);
    var nonDuplicateSubject = new CustomSet([2, 1]);

    expect(subject.eql(nonDuplicateSubject)).toBe(false);
  });

  it('can compare equality of different sets where the first is smaller', function(){
    var subject = new CustomSet([2, 1]);
    var nonDuplicateSubject = new CustomSet([3, 2, 1]);

    expect(subject.eql(nonDuplicateSubject)).toBe(false);
  });

  it('can compare equality of different sets of same length', function(){
    var subject = new CustomSet([3, 2, 1]);
    var nonDuplicateSubject = new CustomSet([2, 1, 2]);

    expect(subject.eql(nonDuplicateSubject)).toBe(false);
  });

  it('can compare equality of totally different values', function(){
    var subject = new CustomSet([3, 2, 1]);
    var nonDuplicateSubject = new CustomSet([4, 5, 6]);

    expect(subject.eql(nonDuplicateSubject)).toBe(false);
  });
});
