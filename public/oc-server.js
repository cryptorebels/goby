module.exports.data = function (context, callback) {
  callback(null, {
    staticPath: context.staticPath,
    params: context.params
  })
}
