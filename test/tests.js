var expect = chai.expect;

describe('GColor', function () {
  describe('#toName', function () {
    it('should return the name for a color given its number', function (done) {
      expect(GColor.toName(255)).to.equal('White');
      expect(GColor.toName(192)).to.equal('Black');
      expect(GColor.toName(225)).to.equal('JazzberryJam');
      done();
    });
  });
  
  describe('#fromHex', function () {
    it('should convert a 6 character hex into a GColor value', function (done) {
      expect(GColor.fromHex('000000')).to.equal(192);
      expect(GColor.fromHex('FFFFFF')).to.equal(255);
      expect(GColor.fromHex('55AA55')).to.equal(217);
      done();
    });
  });
  
  describe('#toHex', function () {
    it('should convert a GColor value into a 6 character hex string', function (done) {
      expect(GColor.toHex(192)).to.equal('000000');
      expect(GColor.toHex(255)).to.equal('FFFFFF');
      expect(GColor.toHex(219)).to.equal('55AAFF');
      done();
    });
  });  
});
