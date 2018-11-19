Extraneous.Code = class
{
  
  constructor(base64)
  {
    this._bytes = base64js.toByteArray(base64);
  }

  to_binary()
  {
    return this._bytes;
  }

  to_text()
  {
    var encoding = 'utf-8';
    return new (TextDecoder || TextDecoderLite)(encoding).decode(this._bytes);
  }

};