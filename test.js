const app = require('../index');
const chai = require('mocha');
describe("GET /surahs/:number", () => {
    it("It should GET a surah by number", (done) => {
        const surahnumber = 1;
        chai.request(app )
            .get("/surahs/" + surahnumber)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('number');
                response.body.should.have.property('name');
                response.body.should.have.property('englishName');
                response.body.should.have.property('englishNameTranslation');
                response.body.should.have.property('numberOfAyahs');
                response.body.should.have.property('revelation');
                response.body.should.have.property('number').eq(1);
            done();
            });
    });
});