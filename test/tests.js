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

  describe('#expandHex', function () {
    it('should convert a GColor hex value into a 6 character hex string', function (done) {
      expect(GColor.expandHex('C0')).to.equal('000000');
      expect(GColor.expandHex('FF')).to.equal('FFFFFF');
      expect(GColor.expandHex('DB')).to.equal('55AAFF');
      done();
    });
  });

  describe('#shortHex', function () {
    it('should convert a 6 character hex into a GColor 2 character hex string', function (done) {
      expect(GColor.shortHex('000000')).to.equal('C0');
      expect(GColor.shortHex('FFFFFF')).to.equal('FF');
      expect(GColor.shortHex('55AA55')).to.equal('D9');
      done();
    });
  });

  describe('#toSunny', function () {
    it('should convert a color into its sunny equivalent', function (done) {
      expect(GColor.toSunny(GColor.fromHex('ff0055'))).to.equal(GColor.fromHex('e25874'));
      expect(GColor.toSunny(GColor.fromHex('ff55aa'))).to.equal(GColor.fromHex('e37fa7'));
      expect(GColor.toSunny(GColor.fromHex('005500'))).to.equal(GColor.fromHex('2b4a2c'));
      done();
    });
  });
});
