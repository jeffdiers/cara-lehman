export function getEmbedUrl(url: string): string | null {
  // YouTube
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoId = extractYouTubeId(url);
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }

  // Vimeo
  if (url.includes('vimeo.com')) {
    const videoId = extractVimeoId(url);
    if (videoId) {
      return `https://player.vimeo.com/video/${videoId}`;
    }
  }

  // Frame.io - return as is, will open in new tab
  if (url.includes('frame.io')) {
    return url;
  }

  // Instagram - can't embed directly, will open in new tab
  if (url.includes('instagram.com')) {
    return url;
  }

  return null;
}

function extractYouTubeId(url: string): string | null {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
}

function extractVimeoId(url: string): string | null {
  const regExp = /vimeo\.com\/(?:.*\/)?(?:videos\/)?([0-9]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

export function canEmbed(url: string): boolean {
  return (
    url.includes('youtube.com') ||
    url.includes('youtu.be') ||
    url.includes('vimeo.com')
  );
}
