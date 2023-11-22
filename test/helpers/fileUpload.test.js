/* eslint-disable no-undef */
import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name:'dn8f8r4ba',
  api_key: '561517261626453',
  api_secret: 'rvjnCTNtn13rIEqAo8uLfXkTHf0',
  secure: true
});

describe('Test on fileUpload', () => {

  test('should upload the image correctly to cloudinary', async () => {
      const imageURL = 'https://store-images.s-microsoft.com/image/apps.50236.69279545232152045.f1a4a87c-fcc9-4b7c-a620-f6c56eb2d5ad.f0eeb1d4-a30c-4a21-8bcb-46ed84669b5c?q=90&w=480&h=270';

      const resp = await fetch(imageURL);
      const blob = await resp.blob();
      const file = new File([blob], 'testImage.jpg');

      const url = await fileUpload(file);
      expect(typeof url).toBe('string');

      const segments = url.split('/');
      const idToDelete = segments[segments.length - 1].replace('.jpg', '');
      await cloudinary.api.delete_resources([`journal-app/${idToDelete}`])
  });

  test('should return null when there is no image', async () => {
      const file = new File([], 'foto.jpg');
      const url = await fileUpload(file);
      expect(url).toBe(null);
  });
});