import { Response } from "express";

export const handleError = (res: Response, error: unknown, defaultMessage: string) => {
  console.error(error);
  const message = error instanceof Error ? error.message : defaultMessage;
  return res.status(500).json({ error: message });
};