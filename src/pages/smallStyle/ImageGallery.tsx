import React, { useState, useEffect } from 'react';
import './ImageGallery.less'; // 引入样式

const ImageGallery = ({ images, onImageClick }) => {
  const [imageRatios, setImageRatios] = useState([]);

  // 获取图片的宽高比
  useEffect(() => {
    const ratios = images.map((image) => image.width / image.height);
    setImageRatios(ratios);
  }, [images]);

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div
          key={index}
          className="image-container"
          onClick={() => onImageClick(image)}
        >
          <div className="image-wrapper">
            <img
              src={image.originUrl}
              alt={image.alt || 'image'}
              className="image"
              style={{ 
                width: '100%',  // 容器宽度的100%
                height: `calc(100% * ${imageRatios[index]})`  // 高度通过宽高比计算
              }}
            />
            <div className="image-overlay">
              <i className="icon">🔍</i> {/* 放大镜图标 */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
