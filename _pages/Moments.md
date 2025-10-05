---
layout: archive
title: "Moments"
permalink: /Moments/
author_profile: false
---

<style>
/* 移除左侧栏预留空间 */
.archive {
  max-width: none;
  margin: 0;
  padding: 0 20px;
  width: 100%;
}

/* 标题居中 */
.page__title {
  text-align: center;
  margin-bottom: 2rem;
}

/* 移除侧边栏 */
.sidebar {
  display: none !important;
}

/* 主内容区域占满宽度 */
.main {
  width: 100% !important;
  max-width: none !important;
}
</style>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  padding: 20px 15px 15px;
  font-size: 0.9em;
  text-align: center;
}

.gallery-item a {
  text-decoration: none;
  color: inherit;
}

/* 特殊布局：第一张图片占两列 */
.gallery-item.featured {
  grid-column: span 2;
}

.gallery-item.featured img {
  height: 300px;
}

@media (max-width: 768px) {
  .gallery {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .gallery-item.featured {
    grid-column: span 1;
  }
  
  .gallery-item img {
    height: 200px;
  }
  
  .gallery-item.featured img {
    height: 250px;
  }
}
</style>

<div class="gallery">
  <div class="gallery-item featured">
    <a href="/images/Moments/HK.JPG">
      <img src="/images/Moments/HK.JPG" alt="Hong Kong">
      <div class="gallery-caption">
        The Pearl of Orient 東方之珠 @Hong Kong SAR, China, 2023
      </div>
    </a>
  </div>
  
  <div class="gallery-item">
    <a href="/images/Moments/IMG_3652.jpg">
      <img src="/images/Moments/IMG_3652.jpg" alt="San Francisco">
      <div class="gallery-caption">
        Fisherman's wharf @San Francisco, U.S., 2023
      </div>
    </a>
  </div>
  
  <div class="gallery-item">
    <a href="/images/Moments/IMG_1063.jpg">
      <img src="/images/Moments/IMG_1063.jpg" alt="Tokyo">
      <div class="gallery-caption">
        The Sky Tree 東京スカイツリー @Tokyo, Japan, 2023
      </div>
    </a>
  </div>
  
  <div class="gallery-item">
    <a href="/images/Moments/IMG_6638.JPG">
      <img src="/images/Moments/IMG_6638.JPG" alt="Wuhan University">
      <div class="gallery-caption">
        Cherry Blossom in WHU 武漢大学 @Wuhan, China, 2023
      </div>
    </a>
  </div>
  
  <div class="gallery-item">
    <a href="/images/Moments/IMG_5494.jpg">
      <img src="/images/Moments/IMG_5494.jpg" alt="Kaifeng">
      <div class="gallery-caption">
        Qingming Shanghe Park 清明上河园 @Kaifeng, China, 2023
      </div>
    </a>
  </div>
  
  <div class="gallery-item">
    <a href="/images/Moments/Ganzi2020.jpeg">
      <img src="/images/Moments/Ganzi2020.jpeg" alt="Ganzi">
      <div class="gallery-caption">
        Highland @Ganzi 甘孜藏族自治州, China, 2020
      </div>
    </a>
  </div>
  
  <div class="gallery-item">
    <a href="/images/Moments/IMG_6639.JPG">
      <img src="/images/Moments/IMG_6639.JPG" alt="Shangri-la">
      <div class="gallery-caption">
        With my best friends @Shangri-la 香格里拉, China, 2020
      </div>
    </a>
  </div>
  
  <div class="gallery-item featured">
    <a href="/images/Moments/SunsetZZ7Z2019.jpg">
      <img src="/images/Moments/SunsetZZ7Z2019.jpg" alt="Zhengzhou">
      <div class="gallery-caption">
        Windowpane in Zhengzhou No.7 @Zhengzhou, China, 2019
      </div>
    </a>
  </div>
</div>


<!-- <center>Sakura in WHU. @Wuhan, China, 2021</center>

[![me](/images/sakuraWHU2021.JPG)](/images/sakuraWHU2021.jpg) -->

<!-- <center>Summer vacation with Z. Wang, S. Zhang, S. Yang, and D. Shi. @Ganzi, China, 2020</center>

[![me](/images/Ganzi2020.jpeg)](/images/Ganzi2020.jpeg) -->

<!-- <center>Summer vacation with Z. Wang, S. Zhang, S. Yang, and D. Shi. @Ganzi, China, 2020</center>

[![me](/images/Shangrila2020.jpeg)](/images/Shangrila2020.jpeg) -->

<!-- <center>Summer vacation with Z. Wang, S. Zhang, S. Yang, and D. Shi. @Shangri-la, China, 2020</center>

[![me](/images/Shangrila2020.jpeg)](/images/Shangrila2020.jpeg) -->

<!-- <center>Windowpane in Zhengzhou No.7 @Zhengzhou, China, 2019</center>

[![me](/images/SunsetZZ7Z2019.jpg)](/images/SunsetZZ7Z2019.jpg) -->
