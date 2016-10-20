class MGiphy {
  constructor(keyword) {
    this.keyword = keyword
    this.endpoint = "http://api.giphy.com/v1/gifs"
    this.api_key = "dc6zaTOxFJmzC"
    this.type = "translate"
  }

  getGifUrl(callback) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", this.endpoint + "/" + this.type + "?s=" + this.keyword + "&api_key=" + this.api_key)
    xhr.responseType = "json"
    xhr.onload = function () {
      callback(this.response.data.images.original.mp4)
    }
    xhr.send()
  }

  static getUrlAsync(keyword, callback) {
    new MGiphy(keyword).getGifUrl(callback)
  }
}