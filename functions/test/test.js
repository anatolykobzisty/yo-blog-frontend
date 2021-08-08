// http://localhost:8888/.netlify/functions/test

exports.handler = async (event, context) => {
  console.log(event);
  return {
    statusCode: 200,
    body: 'testing!!',
  };
};
