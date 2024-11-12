import axios from 'axios';

export async function validateImage(imageUrl: string): Promise<string | null> {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    if (response.data && response.data.length > 0) {
      return imageUrl;
    }
  } catch (error) {
    console.error('Error validating image:', error);
  }
  return null;
}
