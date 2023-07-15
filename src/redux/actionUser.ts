export const ACTIONUSER = "ACTIONUSER";

export function actionUser(user: any) {
  return {
    type: ACTIONUSER,
    user: user,
  };
}
