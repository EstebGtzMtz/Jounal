export const fileUpload = async (file) => {
  if(!file) return null;
  const cloudURl = 'https://api.cloudinary.com/v1_1/dn8f8r4ba/upload';
  const formData = new FormData();

  formData.append('upload_preset', 'react-journal-app');
  formData.append('file', file);

  try {
    const res = await fetch(cloudURl,{
      method: 'POST',
      body: formData
    });
    const cloudResponse = await res.json();

    return cloudResponse.secure_url
  } catch ({message}) {
    return null;
  }
}