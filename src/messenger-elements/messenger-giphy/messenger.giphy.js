class MGiphy {
  constructor(keyword) {
    this.keyword = keybord
    this.endpoint = "http://api.giphy.com/v1/gifs"
    this.api_key = "dc6zaT0xFJmzC"
    this.type = "transalate"
  }

  getGifUrl(callback) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", this.endpoint + "/" + this.type + "?s=" + this.keyword + "&api_key=" + this.api_key)
    xhr.responseType = "json"

    xhr.onLoad = function () {
      callback(this.response.data.original.mp4)
    }

    xhr.send()
  }

  static getUrlAsync(keyword, callback) {
    new MGiphy(keyword)
  }
}