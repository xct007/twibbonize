const axios = require("axios");
const Jimp = require("jimp");

async function checkId(q) {
  let Data, Status;
  try {
    let s = await search(q, 10, true);
    Array.prototype.findByValueOfObject = function (key, value) {
      return this.filter(function (item) {
        return item[key] === value;
      });
    };
    Data = s.findByValueOfObject("id", q)[0];
    Status = true;
  } catch (_error) {
    Status = false;
  } finally {
    if (Status == true) {
      return Data;
    } else {
      return Status;
    }
  }
}
async function imageProcess(id, patch) {
  return new Promise(async (resolve, reject) => {
    let Data, Status, TwbPngUrl;
    await checkId(id).then((data) => {
      if (data == false) {
        reject(false);
      }
      TwbPngUrl = data.imagePngUrl;
    });
    try {
      let ImageTwbPng, ImagePatch, IP;

      ImageTwbPng = await Jimp.read(TwbPngUrl);

      ImagePatch = await Jimp.read(patch);
      IP = {
        width: ImageTwbPng.bitmap.width,
        height: ImageTwbPng.bitmap.height,
      };

      ImagePatch.crop(0, 0, IP.width, IP.height);

      ImagePatch.composite(ImageTwbPng, 0, 0, {
        mode: Jimp.BLEND_SOURCE_OVER,
        opacityDest: 1,
        opacitySource: 1,
      });

      ImagePatch.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        Data = buffer;
      });

      Status = true;
    } catch (_error) {
      Status = false;
    } finally {
      if (Status == false) {
        reject(Status);
      }
      resolve(Data);
    }
  });
}
async function search(query, limit, options) {
  return new Promise(async (resolve, reject) => {
    let Data, Status;
    if (!limit || isNaN(limit)) {
      limit = 10;
    } else if (!options) {
      options = false;
    }
    try {
      await axios
        .request({
          url:
            "https://api.twibbonize.com/v1/campaign/search?keyword=" +
            query +
            "&page=1&numItems=64&sort=support&reactive=1",
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, */*",
            "User-Agent":
              "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          },
        })
        .then(({ data }) => {
          Datas = data.data.campaigns.filter((val, i) => i < limit);
          let ArrayDataTrue = [];
          let ArrayDataFalse = [];
          for (let i of Datas) {
            ArrayDataTrue.push({
              id: i.url,
              imagePngUrl:
                "https://frame.twibbonize.com/" +
                i.thumbnail.replace(/350-/g, "").replace(/(jpg|jpeg)/g, "png"),
            });
          }
          for (let i of Datas) {
            ArrayDataFalse.push({
              hit: i.hit,
              creator: i.campaignCreator.name,
              name: i.name,
              id: i.url,
              description: i.description,
              url: "https://www.twibbonize.com/" + i.url,
            });
          }
          if (options == true) {
            Data = ArrayDataTrue;
            Status = true;
          } else if (options == false) {
            Data = ArrayDataFalse;
            Status = true;
          }
        });
    } catch (_error) {
      Status = false;
    } finally {
      if (Status == false) {
        reject(Status);
      }
      resolve(Data);
    }
  });
}
module.exports = {
  search,
  imageProcess,
};
