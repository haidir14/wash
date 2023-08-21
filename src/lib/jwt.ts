import jwt, { JwtPayload } from "jsonwebtoken";

interface SingOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SingOption = {
  expiresIn: "1h",
};

export function jwtTokenAkses(
  payload: JwtPayload,
  options: SingOption = DEFAULT_SIGN_OPTION
) {
  const s_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, s_key!, options);

  return token;
}

export function verifyJwt(token: string) {
  try {
    const s_key = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, s_key!);
    return decoded as JwtPayload;
  } catch (error) {
    console.log(error);
    return null;
  }
}
