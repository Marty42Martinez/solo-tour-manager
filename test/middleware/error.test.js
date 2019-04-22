const errorMiddleware = require('../../lib/middleware/error');

describe('error middleware', () => {
  it('sets the status to 500 and sends the error', () => {
    const error = 'No good';
    const res = {};
    res.status = jest.fn(()=> res);
    res.send = jest.fn(() => res);

    errorMiddleware(error, {}, res, () => { });
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({
      error
    });


  });
});