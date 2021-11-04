import speakeasy from 'speakeasy';

const generateUserTokenSecret = () => speakeasy.generateSecret().base32;

const generateToken = async (secret: string) => {
  const token = speakeasy.totp({ secret, encoding: 'base32' });
  return token;
};

const verifyToken = (userToken: string, userTokenSecret: string) => {
  const verified = speakeasy.totp.verify({
    secret: userTokenSecret,
    encoding: 'base32',
    token: userToken,
    window: 1,
  });
  return verified;
};

export { generateUserTokenSecret, generateToken, verifyToken };
