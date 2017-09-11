module.export = function (context, req, intable) {
  context.log(intable);
  context.res = {
    status: 200,
    body: intable,
  };
  context.done();
};
