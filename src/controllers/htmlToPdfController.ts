import { Request, Response } from 'express';
import Html5ToPdf from 'html5-to-pdf';
import path from 'path';

export const htmlToPdfController = {
  create: async (req: Request, res: Response): Promise<void> => {
    res.setHeader('content-type', 'application/pdf');
    const html5ToPdf = new Html5ToPdf({
      inputBody: req.body,
      include: [path.join('node_modules', 'bulma', 'css', 'bulma.min.css')]
    });

    await html5ToPdf.start();
    const buffer = (await html5ToPdf.build()).buffer;
    await html5ToPdf.close();

    console.log('Done');
    res.send(Buffer.from(buffer));
  }
};
