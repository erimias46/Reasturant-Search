import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer IcwGWsYOV5M0XVKW3EesC06oH01h41L-pcVypl5tT4lsouoclm-sJ90zyqW96jkRJA3PXGMC13OuMKedK-Qj-p6mtRe6NT_8Z-Ahz2J82CHRvOB9GZrIKH9YTsUUZHYx",
  },
});