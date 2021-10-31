import IDestructureKey from './api-auth.interface';

const destructureKey = (key: string) => {
  const { kty, kid, alg, k }: IDestructureKey = JSON.parse(key);
  return {
    kty,
    kid,
    alg,
    k,
  };
};

export default destructureKey;
