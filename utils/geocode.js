const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1Ijoic2Frc2hhbXJhanZhbnNoaTEiLCJhIjoiY2s0cmc3YWN6MHE2NjNpcDRoMWRyNTFxMyJ9.u5vmgNXY-ZHE6QuipswyjA&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to Geocode API", undefined);
    } else if (body.features.length === 0) {
      callback(
        "Unable to find the Geocode. Try again for different location",
        undefined
      );
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
