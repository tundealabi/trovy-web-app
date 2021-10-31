// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../db/db-connect';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    dbConnect();
    res.status(200).json({ name: 'John Doe' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
