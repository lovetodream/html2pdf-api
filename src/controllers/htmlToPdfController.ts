import { Request, Response } from 'express';
import Html5ToPdf from 'html5-to-pdf';
import path from 'path';

export const htmlToPdfController = {
  create: async (req: Request, res: Response): Promise<void> => {
    res.setHeader('content-type', 'application/pdf');
    const html5ToPdf = new Html5ToPdf({
      inputBody: req.body,
      include: [
        path.join('node_modules', 'bulma', 'css', 'bulma.min.css'),
        path.join('assets', 'din5008.css')
      ]
    });

    await html5ToPdf.start().catch((err) => console.error(err));
    const buffer = (await html5ToPdf.build()).buffer;
    await html5ToPdf.close().catch((err) => console.error(err));

    console.log('Done');
    res.send(Buffer.from(buffer));
  }
};
