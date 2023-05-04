import type { NextApiRequest, NextApiResponse } from "next";

import getT from "next-translate/getT";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const t = await getT("en", "email");

  res.status(200).json(t("email"));
}
