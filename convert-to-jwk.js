const fs = require('fs');
const crypto = require('crypto');
const jose = require('node-jose');

// 公開鍵を読み込み
const publicKey = fs.readFileSync('line_public_key.pem');

// JWKに変換
jose.JWK.asKey(publicKey, 'pem', {
  alg: 'RS256',
  use: 'sig',  // 署名用
}).then(result => {
  // 必要なプロパティだけを抽出
  const jwk = result.toJSON();
  
  // LINE要件に合わせてJWKを構成
  const lineJWK = {
    kty: 'RSA',
    alg: 'RS256',
    use: 'sig',
    n: jwk.n,
    e: jwk.e,
    kid: crypto.randomBytes(8).toString('hex')  // キーID生成
  };
  
  console.log(JSON.stringify(lineJWK, null, 2));
  fs.writeFileSync('line_public_key.jwk', JSON.stringify(lineJWK));
}).catch(err => {
  console.error('変換エラー:', err);
});
