import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

// 環境変数
const CHANNEL_ID = process.env.LINE_CHANNEL_ID;
const KEY_ID = process.env.LINE_KEY_ID;

// 秘密鍵（Vercel環境変数にセットするか、安全な場所に保存）
// 本番環境ではVercel環境変数としてLINE_PRIVATE_KEYを設定
const getPrivateKey = () => {
  if (process.env.LINE_PRIVATE_KEY) {
    return process.env.LINE_PRIVATE_KEY.replace(/\\n/g, '\n');
  }
  
  // 開発環境ではファイルから読み込み
  try {
    return fs.readFileSync(path.join(process.cwd(), 'line_private_key.pem'), 'utf8');
  } catch (error) {
    console.error('秘密鍵読み込みエラー:', error);
    throw new Error('LINE認証用の秘密鍵が見つかりません');
  }
};

// アクセストークン取得関数
export async function getLineAccessToken() {
  try {
    const privateKey = getPrivateKey();
    
    // JWTを生成
    const token = jwt.sign({
      iss: CHANNEL_ID,
      sub: CHANNEL_ID,
      aud: 'https://api.line.me/',
      exp: Math.floor(Date.now() / 1000) + 60 * 30,  // 30分
      token_exp: 60 * 60 * 24 * 30,  // 30日
    }, privateKey, { 
      algorithm: 'RS256', 
      header: { 
        alg: 'RS256',
        typ: 'JWT',
        kid: KEY_ID
      } 
    });
    
    // LINEのトークンエンドポイントにリクエスト
    const response = await fetch('https://api.line.me/oauth2/v2.1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
        client_assertion: token,
      }),
    });
    
    const data = await response.json();
    
    if (!data.access_token) {
      throw new Error('アクセストークン取得失敗: ' + JSON.stringify(data));
    }
    
    return data.access_token;
  } catch (error) {
    console.error('LINE認証エラー:', error);
    throw error;
  }
}