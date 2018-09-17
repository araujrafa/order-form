import get from '../get';

describe('Request GET', () => {

  beforeEach(() => {
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    spyOn(XMLHttpRequest.prototype, 'send');
  });

  it("Should call proper API", function() {
    get('localhost:3000/api/fields.json');
  
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalled();
  });

  it("Should call proper API", () => {
    get('localhost:3000/api/fields.json');
  
    expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
  });

});