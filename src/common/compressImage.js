export const compressImage = async (base64String, quality = 0.5) => {
  return new Promise((resolve, reject) => {
    // 이미지 생성
    const img = new Image();

    // 이미지 로드 시 캔버스에 그리기
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // 캔버스 크기 조정
      canvas.width = img.width;
      canvas.height = img.height;

      // 이미지 캔버스에 그리기
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // 캔버스 내용 압축된 base64로 변환
      canvas.toBlob(
        (blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(blob);
        },
        "image/jpeg",
        quality
      );
    };
    img.src = base64String;
  });
};
