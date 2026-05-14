---
layout: archive
permalink: /
title: "Greetings! This is Shuang Liang | 梁爽"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- <style> h2 { border-bottom: none } </style> -->

<style>

.news-window {
  max-height: 22rem;
  overflow-y: auto;
  padding: 1rem 1.2rem;
  border: 1px solid #d7dee6;
  border-radius: 6px;
  background: #f8fbfd;
  scroll-behavior: smooth;
}

.news-window ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.news-window li {
  margin: 0;
  padding: 0 0 1rem;
}

.news-window li + li {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e3e8ee;
}

.news-window p {
  margin: 0;
  line-height: 1.7;
}

.news-window::-webkit-scrollbar {
  width: 8px;
}

.news-window::-webkit-scrollbar-thumb {
  background: #b8c4d1;
  border-radius: 999px;
}

.news-window::-webkit-scrollbar-track {
  background: transparent;
}

.research-intro {
  margin: 0 0 1.25rem;
  font-size: 1.05rem;
  line-height: 1.8;
}

.research-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.5rem 0 0;
  align-items: stretch;
}

.research-card {
  position: relative;
  display: grid;
  grid-template-rows: auto minmax(3.4rem, auto) minmax(3.2rem, auto) 1fr;
  min-height: 15rem;
  padding: 5.2rem 1.25rem 1.25rem;
  border: none;
  border-radius: 0;
  background: linear-gradient(180deg, rgba(248, 251, 253, 0) 0%, #f8fbfd 22%, #f8fbfd 100%);
  overflow: hidden;
}

.research-card:nth-child(1),
.research-card:nth-child(3) {
  margin-top: 0.8rem;
  min-height: 14.5rem;
}

.research-card:nth-child(2) {
  min-height: 15.8rem;
  margin-top: 0.8rem;
  background: linear-gradient(180deg, rgba(243, 248, 251, 0) 0%, #f3f8fb 24%, #f3f8fb 100%);
}

.research-card__icon {
  position: absolute;
  top: 0.2rem;
  left: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 0;
  background: transparent;
  font-size: 1.3rem;
  transform: translateX(-50%);
}

.research-card h3 {
  max-width: 100%;
  margin: 0 0 0.45rem;
  font-size: 1.08rem;
  line-height: 1.35;
  text-align: center;
}

.research-card__tag {
  margin: 0 0 0.7rem;
  color: #4c6476;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: center;
}

.research-card p {
  margin: 0;
  line-height: 1.75;
  text-align: left;
  text-wrap: pretty;
}

.page__content > h2 {
  margin-top: 2.8rem;
  margin-bottom: 1rem;
  font-size: 1.45rem;
  letter-spacing: -0.02em;
  border-bottom: none;
}

.page__content a {
  text-decoration-thickness: 1px;
  text-underline-offset: 0.15em;
}

.section-lead {
  margin: 0 0 1.1rem;
  color: #4c6476;
  line-height: 1.75;
}

.resource-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.75rem;
}

.resource-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.42rem;
  padding: 0.28rem 0.62rem;
  border: 1px solid #d7dee6;
  border-radius: 999px;
  background: #fbfdff;
  color: #334a5b;
  font-size: 0.84rem;
  line-height: 1.2;
  text-decoration: none !important;
  white-space: nowrap;
}

.resource-pill:hover {
  background: #f4f8fb;
  border-color: #bfd0de;
}

.resource-pill--disabled {
  opacity: 0.58;
  cursor: help;
  border-style: dashed;
}

.resource-pill__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.15rem;
  height: 1.15rem;
  color: #688093;
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1;
}

.resource-pill__mark img {
  width: 0.92rem;
  height: 0.92rem;
  display: block;
}

.resource-pill__mark--wide {
  min-width: 1.55rem;
}

.resource-pill__mark--wide img {
  width: 1.4rem;
  height: auto;
}

.resource-pill__mark--pdf {
  min-width: 1.4rem;
  height: 1rem;
  padding: 0 0.18rem;
  border-radius: 3px;
  background: #e14b3b;
  color: #ffffff;
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.contact-card,
.review-card {
  padding: 1.1rem 1.2rem;
  border: 1px solid #d7dee6;
  border-radius: 6px;
  background: #fbfdff;
}

.contact-card p,
.review-card p {
  margin: 0;
  line-height: 1.75;
}

.contact-card p + p {
  margin-top: 0.7rem;
}

.contact-inline-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  margin-right: 0.35rem;
  color: #5f7687;
}

.contact-inline-icon img {
  width: 0.95rem;
  height: 0.95rem;
  display: block;
}

.education-table,
.publication-table,
.projects-table,
.stats-table,
.text-table {
  width: 100% !important;
  border-spacing: 0 0.95rem !important;
  border-collapse: separate !important;
}

.projects-table,
.stats-table {
  border: none !important;
  background: transparent !important;
}

.projects-table tr,
.projects-table tbody,
.stats-table tr,
.stats-table tbody {
  border: none !important;
  background: transparent !important;
}

.education-table td,
.publication-table td,
.text-table td {
  padding: 1.1rem 1.15rem !important;
  border-top: 1px solid #d7dee6 !important;
  border-bottom: 1px solid #d7dee6 !important;
  background: #fbfdff;
  vertical-align: middle;
}

.education-table td:first-child,
.publication-table td:first-child,
.text-table td:first-child {
  border-left: 1px solid #d7dee6 !important;
  border-radius: 6px 0 0 6px;
}

.education-table td:last-child,
.publication-table td:last-child,
.text-table td:last-child {
  border-right: 1px solid #d7dee6 !important;
  border-radius: 0 6px 6px 0;
}

.publication-table td > a > img,
.education-table img {
  border-radius: 4px;
  display: block;
}

.projects-table,
.stats-table {
  border-spacing: 0 0.75rem !important;
}

.stats-table {
  table-layout: fixed;
  width: auto !important;
  margin: 0 auto;
}

.projects-table td,
.stats-table td {
  padding: 0.4rem 0.6rem !important;
  border: none !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  text-align: center;
}

.projects-table td {
  padding: 1rem 1.1rem !important;
  border-top: 1px solid #d7dee6 !important;
  border-bottom: 1px solid #d7dee6 !important;
  background: #fbfdff !important;
}

.projects-table td:first-child {
  border-left: 1px solid #d7dee6 !important;
  border-right: 1px solid #d7dee6 !important;
  border-radius: 6px 0 0 6px !important;
}

.projects-table td:last-child {
  border-right: 1px solid #d7dee6 !important;
  border-radius: 0 6px 6px 0 !important;
}

.projects-table img,
.stats-table img {
  border-radius: 4px;
  display: block;
}

.stats-table td {
  width: 430px;
  padding: 0.2rem 0.35rem !important;
  vertical-align: top;
}

.stats-table img {
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
}

.projects-table a img[src*="img.shields.io"],
.stats-table a img[src*="img.shields.io"],
.projects-table img[src*="img.shields.io"],
.stats-table img[src*="img.shields.io"] {
  display: inline-block !important;
  vertical-align: middle;
  border-radius: 0;
}

.review-card {
  width: min(100%, 760px);
  margin: 0 auto;
  padding: 0;
  border: none;
  border-radius: 0;
  background: transparent;
}

.facts-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.facts-list li {
  margin: 0 0 0.8rem;
  padding: 0.1rem 0 0.1rem 0.9rem;
  border: none;
  border-left: 2px solid #d7dee6;
  border-radius: 0;
  background: transparent;
  font-size: 0.92rem;
  line-height: 1.6;
  color: #596d7d;
}

hr.section-divider {
  margin: 2.4rem 0 0;
  border: 0;
  border-top: 1px solid #e1e7ee;
}

.degree-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.32rem;
  margin: 0 0 0.8rem;
}

.degree-badge {
  display: inline-flex;
  align-items: stretch;
  border: 1px solid #d7dee6;
  background: #fbfdff;
  color: #2f4658;
  font-size: 0.7rem;
  line-height: 1;
  overflow: hidden;
}

.degree-badge__label {
  display: inline-flex;
  align-items: center;
  padding: 0.26rem 0.38rem;
  background: #edf4f8;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.degree-badge__value {
  display: inline-flex;
  align-items: center;
  padding: 0.26rem 0.42rem;
  color: #5d7282;
  font-weight: 500;
}

.degree-badge--whu .degree-badge__label {
  background: #3bb3c3;
  color: #ffffff;
}

.degree-badge--hku .degree-badge__label {
  background: #e05430;
  color: #ffffff;
}

@media (max-width: 768px) {
  .news-window {
    max-height: 18rem;
    padding: 0.9rem 1rem;
    border-radius: 6px;
  }

  .research-intro {
    font-size: 1rem;
  }

  .research-grid {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }

  .research-card {
    min-height: auto;
    margin-top: 0 !important;
    grid-template-rows: auto auto auto 1fr;
    padding: 0.85rem 1rem 0.85rem 3.4rem;
    border-radius: 6px;
    background: #f8fbfd;
  }

  .research-card:nth-child(2) {
    min-height: auto;
  }

  .research-card__icon {
    top: 0.45rem;
    left: 1.1rem;
    width: 2.6rem;
    height: 2.6rem;
    font-size: 1.25rem;
    transform: translateX(-50%);
  }

  .research-card h3 {
    max-width: 100%;
    text-align: left;
  }

  .research-card__tag,
  .research-card p {
    text-align: left;
  }

  .page__content > h2 {
    margin-top: 2.2rem;
    font-size: 1.3rem;
  }

  .contact-card,
  .review-card {
    padding: 1rem;
    border-radius: 6px;
  }

  .review-card {
    padding: 0;
    border: none;
    background: transparent;
  }

  .resource-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem 0.45rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .resource-pill {
    padding: 0.32rem 0.5rem;
    font-size: 0.8rem;
    white-space: normal;
    justify-content: center;
    text-align: center;
    min-height: 2.35rem;
    box-sizing: border-box;
  }

  .resource-pill__mark {
    flex-shrink: 0;
  }

  .facts-list li {
    padding-left: 0.9rem;
    font-size: 0.9rem;
  }

  .degree-badges {
    gap: 0.28rem;
  }

  .degree-badge {
    font-size: 0.68rem;
  }

  .degree-badge__label,
  .degree-badge__value {
    padding-top: 0.24rem;
    padding-bottom: 0.24rem;
  }


  .education-table,
  .publication-table,
  .projects-table,
  .stats-table,
  .text-table {
    border-spacing: 0 0.8rem !important;
  }

  .education-table td,
  .publication-table td,
  .projects-table td,
  .stats-table td,
  .text-table td {
    border: 1px solid #d7dee6 !important;
    border-radius: 6px !important;
    padding: 0.95rem !important;
  }

  .projects-table td,
  .stats-table td {
    border: none !important;
    padding: 0.8rem 0 !important;
  }

  .projects-table td {
    border: 1px solid #d7dee6 !important;
    border-radius: 6px !important;
    padding: 0.95rem !important;
    background: #fbfdff !important;
  }

  .stats-table td {
    width: 100%;
    padding: 0.35rem 0 !important;
  }
  
  table {
    width: 100% !important;
    max-width: 100% !important;
    display: block !important;
    box-sizing: border-box !important;
    overflow-x: visible !important;
  }
  
  table tbody {
    display: block !important;
    width: 100% !important;
  }
  
  table tr {
    display: block !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  
  table td {
    display: block !important;
    width: 100% !important;
    word-wrap: break-word !important;
    word-break: break-word !important;
    box-sizing: border-box !important;
  }
  
  table img:not([style*="position: absolute"]),
  table img:not([style*="position:absolute"]) {
    max-width: 100% !important;
    height: auto !important;
  }
}
</style>

<div class="degree-badges" aria-label="Degrees">
  <span class="degree-badge degree-badge--whu">
    <span class="degree-badge__label">B.S.</span>
    <span class="degree-badge__value">WHU (2020–2024)</span>
  </span>
  <span class="degree-badge degree-badge--hku">
    <span class="degree-badge__label">Ph.D.</span>
    <span class="degree-badge__value">HKU (2024–Present)</span>
  </span>
</div>
<!-------------------->

I’m a second-year Ph.D. student at the <a href="https://www.eee.hku.hk">Department of Electrical and Computer Engineering, The University of Hong Kong</a>. I am very fortunate to be advised by Prof. <a href = "https://www.eee.hku.hk/people/h-wang">Han Wang</a> and Prof. <a href = "https://xh-liu.github.io">Xihui Liu</a>.

Before HKU, I obtained my Bachelor of Science degree in Physics from <a href = "https://physics.whu.edu.cn">School of Physics and Technology, Wuhan University</a>, advised by Prof. <a href = "http://yuan.whu.edu.cn">Shengjun Yuan</a> and Prof. <a href = "http://jszy.whu.edu.cn/zhangshunping/en/index.htm#">Shunping Zhang</a>. I also spent a wonderful time as a research intern at Rama Alpaca Technology Company under the supervision of Dr. <a href = "https://guozhang.mit.edu/guos-personal-home">Guo Zhang</a> and in collaboration with Prof. <a href = "https://www.yingcong.me">Yingcong Chen</a> and Prof. <a href  = "https://yyuanad.github.io">Yuan Yuan</a> in the last semester of my undergraduate study. We have maintained a strong and frequent research collaboration ever since.

<div class="research-intro">
  My research focuses on <strong>computer vision</strong>, <strong>multimodal representation learning</strong>, and <strong>hardware-efficient AI</strong>. I build robust, transferable, and efficient intelligent systems across perception, representation, and deployment.
</div>

## Please contact me via:

<div class="contact-card">
  <p><i class="fa fa-fw fa-envelope"></i> Email: <a href="mailto:tsliang2001@gmail.com">tsliang2001@gmail.com</a> or <a href="mailto:sliang57@connect.hku.hk">sliang57@connect.hku.hk</a> or <a href="mailto:liangshuang@whu.edu.cn">liangshuang@whu.edu.cn</a></p>
  <p><span class="contact-inline-icon"><img src="/images/wechat.svg" alt="WeChat logo"></span>You may also follow my WeChat Official Account <strong>@Teemo.log</strong>. It is a place where I share daily updates and personal thoughts. Articles from my WeChat Official Account are Chinese only.</p>
</div>

## What's new:

<div class="news-window" aria-label="Latest updates">
  <ul>
    <li>
      <p><strong>[Oct. 30th, 2025]</strong> 🎉 <strong>Our work SDPose-OOD is getting noticed!</strong>: A big shout-out to the community developers who made a ComfyUI node for SDPose-OOD, making it even easier to integrate into creative workflows. 🙌 Try it out here: <a href="https://github.com/judian17/ComfyUI-SDPose-OOD">ComfyUI Node SDPose-OOD</a>.</p>
    </li>
    <li>
      <p><strong>[Oct. 14th, 2025]</strong> 🚀 <strong>Open-source of SDPose</strong>: Major code and model release now available: <a href="https://github.com/T-S-Liang/SDPose-OOD">GitHub Repository</a> | <a href="https://huggingface.co/teemosliang/SDPose-Body">HF Model (Body)</a> | <a href="https://huggingface.co/teemosliang/SDPose-Wholebody">HF Model (WholeBody)</a>.</p>
    </li>
    <li>
      <p><strong>[Sep. 1st, 2025]</strong> 🍻 <strong>IEDM '25</strong>: One paper accepted by IEDM 2025. Thank Professor Han Wang, Professor Aoyang Zhang, and Professor Zhongrui Wang for their invaluable guidance, and thank Songqi and Jichang for the smooth collaboration.</p>
    </li>
    <li>
      <p><strong>[Sep. 24th, 2025]</strong> 🧑‍💻 <strong>New paper release</strong>: Check out our new work <strong>SDPose</strong> on exploiting the diffusion priors for OOD and robust pose estimation. I'm sooooo excited to share this work. Thank Dr. Guo Zhang, Professor Yingcong Chen, and Professor Yuan Yuan for their invaluable guidance.</p>
    </li>
    <li>
      <p><strong>[Jan. 9th, 2025]</strong> 🍻 <strong>Optica Optics Express '25</strong>: One paper for my undergraduate research was accepted by Optics Express. Thank Professor Zhang for his invaluable guidance, and thank Yuze and Haimu for their collaboration and support.</p>
    </li>
    <li>
      <p><strong>[Oct. 2nd, 2024]</strong> ✈️ <strong>Enrollment@HKU</strong>: New journey started. I began my postgraduate research study at the Department of Electrical and Electronic Engineering at the University of Hong Kong.</p>
    </li>
    <li>
      <p><strong>[June 22nd, 2024]</strong> 🎓 <strong>Graduation@WHU</strong>: Received my Bachelor of Science degree in Physics from Wuhan University. I am grateful to have received guidance and enlightenment in computational physics and AI4Sci from Prof. <a href="http://yuan.whu.edu.cn">Shengjun Yuan</a>, and guidance in experimental optoelectronics from Prof. <a href="http://jszy.whu.edu.cn/zhangshunping/en/index.htm#">Shunping Zhang</a> during my undergraduate studies.</p>
    </li>
    <li>
      <p><strong>[Feb. 2nd, 2024]</strong> 🧑‍💻 <strong>Internship@Rama Alpaca</strong>: I started as an MLE research intern at Beijing Rama Alpaca Co. Ltd. in the spring semester under the supervision of Dr. <a href="https://guozhang.mit.edu/guos-personal-home">Guo Zhang</a> from MIT, collaborating with Prof. <a href="https://www.yingcong.me">Yingcong Chen</a> at HKUST and Prof. <a href="https://yyuanad.github.io">Yuan Yuan</a> at Boston College.</p>
    </li>
    <li>
      <p><strong>[Feb. 9th, 2023]</strong> 🧑‍💻 <strong>Research@CPCS-WHU</strong>: I've joined Prof. <a href="http://yuan.whu.edu.cn">Shengjun Yuan</a>'s group at Wuhan University as a research assistant this semester.</p>
    </li>
    <li>
      <p><strong>[Feb. 14th, 2022]</strong> 🔬 <strong>Research@Xu Lab-WHU</strong>: I've joined Prof. <a href="http://jszy.whu.edu.cn/zhangshunping/en/index.htm#">Shunping Zhang</a>'s <a href="https://np.whu.edu.cn">lab</a> at Wuhan University for undergraduate research.</p>
    </li>
  </ul>
</div>

## Education
<!-- <h2><b>Experience</b></h2> -->
<style>
@media (max-width: 768px) {
  .education-table {
    width: 100% !important;
    display: block !important;
    box-sizing: border-box !important;
  }
  .education-table tbody {
    display: block !important;
    width: 100% !important;
  }
  .education-table tr {
    display: block !important;
    margin-bottom: 20px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  .education-table td {
    display: block !important;
    width: 100% !important;
    padding: 10px 0 !important;
    text-align: center !important;
    box-sizing: border-box !important;
  }
  .education-table img {
    max-width: 80% !important;
    height: auto !important;
  }
}
</style>

<table class="education-table" style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:0;margin-left:0;font-size:0.95em;">

  <tr>
    <td style="padding:8px;width:30%;vertical-align:middle;border:none;">
      <center><img src='images/hkulogo.png' style="max-width:100%;height:auto;width:300px;"></center>
    </td>
    <td style="padding:20px;width:70%;vertical-align:middle;border-right:none;border:none;">
      <b><a href="https://www.eee.hku.hk">Department of Electrical and Computer Engineering</a>, The University of Hong Kong.</b>
      <br>
      Ph.D. Student in Electrical and Computer Engineering
      <br>
      Research: Computer Vision, Representation Learning, Hardware Acceleration.
      <br>
      (Oct. 2024 - Present)
    </td>
  </tr>

  <tr>
    <td style="padding:8px;width:30%;vertical-align:middle;border:none;">
      <center><img src='images/WHU.png' style="max-width:100%;height:auto;width:200px;"></center>
    </td>
    <td style="padding:20px;width:70%;vertical-align:middle;border-right:none;border:none;">
      <b><a href="http://physics.whu.edu.cn/">School of Physics and Technology</a>, Wuhan University.</b>
      <br>
      B.S. in Physics
      <br>
      Research: Condensed Matter Physics Experiment, AI for Computational Physics.
      <br>
      Dissertation: Constructing Tight-binding Model Based on Deep Learning
      <br>
      (Sept. 2020 - Jun. 2024)
    </td>
  </tr>
  
</table>

## Featured Publications
<!-- <h2><b>Publications</b></h2> -->
<p class="section-lead">First-author and co-first-author works are highlighted below. For the full list, please refer to the <a href="/publications">Publication</a> section or my <a href="https://scholar.google.com.hk/citations?hl=zh-CN&user=L236mPUAAAAJ">Google Scholar</a>.<br>†These authors contributed equally. *Corresponding author.</p>

<style>
@media (max-width: 768px) {
  /* 强制表格完全适应容器 */
  .publication-table {
    width: 100% !important;
    max-width: 100% !important;
    display: block !important;
    box-sizing: border-box !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  .publication-table tbody {
    display: block !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  .publication-table tr {
    display: block !important;
    margin-bottom: 25px !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
  .publication-table td {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 5px 0 !important;
    margin: 0 !important;
    box-sizing: border-box !important;
    /* 强制文本换行 */
    word-wrap: break-word !important;
    word-break: break-word !important;
    overflow-wrap: break-word !important;
    hyphens: auto !important;
  }
  /* 确保所有文本元素都能换行 */
  .publication-table td * {
    word-wrap: break-word !important;
    word-break: break-word !important;
    overflow-wrap: break-word !important;
  }
  /* 直接子图片（非四宫格） */
  .publication-table td > a > img {
    max-width: 100% !important;
    width: 100% !important;
    height: auto !important;
    display: block !important;
  }
  /* SDPose 四宫格容器 */
  .publication-table td > div {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 2px !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  /* 四宫格中的每个单元 */
  .publication-table td > div > a {
    width: calc(50% - 1px) !important;
    padding-top: calc(50% - 1px) !important;
    max-width: calc(50% - 1px) !important;
    box-sizing: border-box !important;
    flex-shrink: 0 !important;
    margin: 0 !important;
    position: relative !important;
  }
  /* 四宫格中的图片 */
  .publication-table td > div > a > img {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }
}
</style>

<table class="publication-table" style="width:100%;border:None;border-spacing:0px;border-collapse:separate;margin-right:0;margin-left:0;font-size:0.95em;">

  <tr>
    <td style="padding:5px;width:70%;vertical-align:middle;border-right:none;border-bottom:none;">
      <b>4. "From Pixels to Concepts: Do Segmentation Models Understand What They Segment?"</b>,
      <br>
      <u>Shuang Liang</u>†, Zeqing Wang†, Yuxian Li†, Xihui Liu and Han Wang*.
      <br>
      <i>Preprint.</i>
      <div class="resource-links">
        <a class="resource-pill" href="/files/CAFE.pdf">
          <span class="resource-pill__mark resource-pill__mark--pdf">PDF</span>
          <span>PDF</span>
        </a>
        <a class="resource-pill" href="https://tsliang.top/CAFE/">
          <span class="resource-pill__mark"><i class="fa fa-window-maximize" aria-hidden="true"></i></span>
          <span>Project Page</span>
        </a>
        <a class="resource-pill" href="https://github.com/T-S-Liang/CAFE">
          <span class="resource-pill__mark"><img src="https://cdn.simpleicons.org/github" alt="GitHub logo"></span>
          <span>Code</span>
        </a>
        <a class="resource-pill" href="https://huggingface.co/datasets/teemosliang/CAFE">
          <span class="resource-pill__mark"><img src="https://cdn.simpleicons.org/huggingface" alt="Hugging Face logo"></span>
          <span>Dataset</span>
        </a>
        <a class="resource-pill" href="https://arxiv.org/abs/2605.09591">
          <span class="resource-pill__mark"><img src="https://cdn.simpleicons.org/arxiv" alt="arXiv logo"></span>
          <span>arXiv</span>
        </a>
      </div>
    </td>
    <td style="padding:10px;width:30%;vertical-align:middle;border-right:none;border-bottom:none;">
      <a href="https://tsliang.top/CAFE/">
      <img src="https://tsliang.top/CAFE/static/images/more_cases.jpg" alt="Diverse CAFE test cases across SM, CC, and OC" style="max-width:100%;height:auto;width:300px;">
      </a>
    </td>
  </tr>

  <tr>
    <td style="padding:5px;width:70%;vertical-align:middle;border-right:none;border-bottom:none;">
      <b>3. "A Monolithic Reconfigurable RRAM CIM Array Integrating PUF, TRNG, and a Lightweight Block Cipher for Secure Edge AI"</b>, 
      <br>
      Songqi Wang†, <u>Shuang Liang†</u>, Shaonan Wu†, Zhiqi Yang, Jichang Yang, Xinyuan Zhang, Yi Li, Yuhao Zhang*, Zhongrui Wang*, Aoyang Zhang* and Han Wang*.
      <br>
      <i>International Electron Devices Meeting (IEDM) 2025.</i>
      <div class="resource-links">
        <a class="resource-pill" href="https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=L236mPUAAAAJ&citation_for_view=L236mPUAAAAJ:9yKSN-GCB0IC" target="_blank">
          <span class="resource-pill__mark"><img src="https://cdn.simpleicons.org/googlescholar" alt="Google Scholar logo"></span>
          <span>Google Scholar</span>
        </a>
      </div>
    </td>
    <td style="padding:10px;width:30%;vertical-align:middle;border-right:none;border-bottom:none;">
      <a href="/images/IEDM_SCIM.jpg">
      <img src='/images/IEDM_SCIM.jpg' style="max-width:100%;height:auto;width:300px;">
      </a>
    </td>
  </tr>
  
  
  <tr>
    <td style="padding:5px;width:70%;vertical-align:middle;border-right:none;border-bottom:none;">
      <b>2. "SDPose: Exploiting Diffusion Priors for Out-of-Domain and Robust Pose Estimation"</b>, 
      <br>
      <u>Shuang Liang</u>, Jing He, Chuanmeizhi Wang, Lejun Liao, Guo Zhang, Yingcong Chen and Yuan Yuan*.
      <br>
      <i>Preprint.</i>
      <div class="resource-links">
        <a class="resource-pill" href="/files/SDPose.pdf">
          <span class="resource-pill__mark resource-pill__mark--pdf">PDF</span>
          <span>PDF</span>
        </a>
        <a class="resource-pill" href="https://github.com/T-S-Liang/SDPose-OOD">
          <span class="resource-pill__mark"><img src="https://cdn.simpleicons.org/github" alt="GitHub logo"></span>
          <span>Code</span>
        </a>
        <a class="resource-pill" href="https://arxiv.org/abs/2509.24980">
          <span class="resource-pill__mark"><img src="https://cdn.simpleicons.org/arxiv" alt="arXiv logo"></span>
          <span>arXiv</span>
        </a>
        <a class="resource-pill" href="https://t-s-liang.github.io/SDPose">
          <span class="resource-pill__mark"><i class="fa fa-window-maximize" aria-hidden="true"></i></span>
          <span>Project Page</span>
        </a>
        <a class="resource-pill" href="https://huggingface.co/spaces/teemosliang/SDPose">
          <span class="resource-pill__mark"><img src="https://cdn.simpleicons.org/huggingface" alt="Hugging Face logo"></span>
          <span>Demo</span>
        </a>
      </div>
    </td>
    <td style="padding:10px;width:30%;vertical-align:middle;border-right:none;border-bottom:none;">
      <div style="display:flex;flex-wrap:wrap;gap:2px;width:100%;box-sizing:border-box;">
        <a href="/images/SDPose_1.gif"
           style="position:relative;width:calc(50% - 1px);padding-top:calc(50% - 1px);display:block;overflow:hidden;border-radius:4px;box-sizing:border-box;">
          <img src="/images/SDPose_1.gif" alt="SDPose gif 1"
               style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;">
        </a>
        <a href="/images/SDPose_2.gif"
           style="position:relative;width:calc(50% - 1px);padding-top:calc(50% - 1px);display:block;overflow:hidden;border-radius:4px;box-sizing:border-box;">
          <img src="/images/SDPose_2.gif" alt="SDPose gif 2"
               style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;">
        </a>
        <a href="/images/SDPose_3.gif"
           style="position:relative;width:calc(50% - 1px);padding-top:calc(50% - 1px);display:block;overflow:hidden;border-radius:4px;box-sizing:border-box;">
          <img src="/images/SDPose_3.gif" alt="SDPose gif 3"
               style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;">
        </a>
        <a href="/images/SDPose_4.gif"
           style="position:relative;width:calc(50% - 1px);padding-top:calc(50% - 1px);display:block;overflow:hidden;border-radius:4px;box-sizing:border-box;">
          <img src="/images/SDPose_4.gif" alt="SDPose gif 4"
               style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;">
        </a>
      </div>
    </td>
  </tr>

  <tr>
    <td style="padding:5px;width:70%;vertical-align:middle;border-right:none;border-bottom:none;">
      <b>1. "Saturable Absorption of Few-layer $\mathrm{WS_{2}}$ and $\mathrm{WSe_{2}}$ at Exciton Resonance"</b>, 
      <br>
      <u>Shuang Liang</u>, Yuze Lu, Haimu Liu, Xiaohe Shang, Jiamin Ji, Rongguang Du, Yiling Yu and Shunping Zhang*.
      <br>
      <i>Optica Optics Express, 2025.</i>
      <div class="resource-links">
        <a class="resource-pill" href="/files/OE25.pdf">
          <span class="resource-pill__mark resource-pill__mark--pdf">PDF</span>
          <span>PDF</span>
        </a>
        <a class="resource-pill" href="https://doi.org/10.1364/OE.539834">
          <span class="resource-pill__mark"><img src="/images/optica-symbol.svg" alt="Optica icon"></span>
          <span>Optica</span>
        </a>
      </div>
    </td>
    <td style="padding:10px;width:30%;vertical-align:middle;border-right:none;border-bottom:none;">
      <a href="/images/SA.png">
      <img src='/images/SA.png' style="max-width:100%;height:auto;width:300px;">
      </a>
    </td>
  </tr>
</table>

## Featured Open-source Projects ([Github](https://github.com/t-s-liang))

<style>
@media (max-width: 768px) {
  .projects-table, .stats-table {
    width: 100% !important;
    display: block !important;
    box-sizing: border-box !important;
  }
  .projects-table tbody, .stats-table tbody {
    display: block !important;
    width: 100% !important;
  }
  .projects-table tr, .stats-table tr {
    display: block !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  .projects-table td, .stats-table td {
    display: block !important;
    width: 100% !important;
    padding: 15px 0 !important;
    box-sizing: border-box !important;
  }
  .projects-table img, .stats-table img {
    max-width: 100% !important;
    height: auto !important;
  }
}
</style>

<table class="projects-table" style="font-size:0.95em;">
  <tr>
    <td align="center">
      <img src='/images/SDPose_logo.png' style="max-width:100%;height:auto;width:300px;">
      <br>
      <a href="https://github.com/t-s-liang/SDPose-OOD/stargazers">
      <img alt="GitHub stars" src="https://img.shields.io/github/stars/t-s-liang/SDPose-OOD?style=social">
      </a>
      <a href="https://github.com/t-s-liang/SDPose-OOD/network/members">
      <img alt="GitHub forks" src="https://img.shields.io/github/forks/t-s-liang/SDPose-OOD?style=social">
      </a>
    </td>
    <td align="center">
      <strong>
        <a href="https://github.com/t-s-liang/SDPose-OOD">
        SDPose: Exploiting Diffusion Priors for Out-of-Domain and Robust Pose Estimation
        </a> <br> 
      </strong>
      <div class="resource-links" style="justify-content:center;">
        <a class="resource-pill" href="https://github.com/T-S-Liang/SDPose-OOD">
          <span class="resource-pill__mark"><img src="https://cdn.simpleicons.org/github" alt="GitHub logo"></span>
          <span>Code</span>
        </a>
        <a class="resource-pill" href="/files/SDPose.pdf">
          <span class="resource-pill__mark resource-pill__mark--pdf">PDF</span>
          <span>PDF</span>
        </a>
        <a class="resource-pill" href="https://arxiv.org/abs/2509.24980">
          <span class="resource-pill__mark"><img src="https://cdn.simpleicons.org/arxiv" alt="arXiv logo"></span>
          <span>arXiv</span>
        </a>
        <a class="resource-pill" href="https://t-s-liang.github.io/SDPose">
          <span class="resource-pill__mark"><i class="fa fa-window-maximize" aria-hidden="true"></i></span>
          <span>Project Page</span>
        </a>
        <a class="resource-pill" href="https://huggingface.co/spaces/teemosliang/SDPose">
          <span class="resource-pill__mark"><img src="https://cdn.simpleicons.org/huggingface" alt="Hugging Face logo"></span>
          <span>Demo</span>
        </a>
      </div>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="/images/cafe_logo_2.png" alt="CAFE logo" style="max-width:100%;height:auto;width:300px;">
      <br>
      <a href="https://github.com/T-S-Liang/CAFE/stargazers">
      <img alt="GitHub stars" src="https://img.shields.io/github/stars/T-S-Liang/CAFE?style=social">
      </a>
      <a href="https://github.com/T-S-Liang/CAFE/network/members">
      <img alt="GitHub forks" src="https://img.shields.io/github/forks/T-S-Liang/CAFE?style=social">
      </a>
    </td>
    <td align="center">
      <strong>
        <a href="https://github.com/T-S-Liang/CAFE">
        CAFE: Counterfactual Attribute Factuality Evaluation
        </a> <br>
      </strong>
      <div class="resource-links" style="justify-content:center;">
        <a class="resource-pill" href="/files/CAFE.pdf">
          <span class="resource-pill__mark resource-pill__mark--pdf">PDF</span>
          <span>PDF</span>
        </a>
        <a class="resource-pill" href="https://tsliang.top/CAFE/">
          <span class="resource-pill__mark"><i class="fa fa-window-maximize" aria-hidden="true"></i></span>
          <span>Project Page</span>
        </a>
        <a class="resource-pill" href="https://github.com/T-S-Liang/CAFE">
          <span class="resource-pill__mark"><img src="https://cdn.simpleicons.org/github" alt="GitHub logo"></span>
          <span>Code</span>
        </a>
        <a class="resource-pill" href="https://huggingface.co/datasets/teemosliang/CAFE">
          <span class="resource-pill__mark"><img src="https://cdn.simpleicons.org/huggingface" alt="Hugging Face logo"></span>
          <span>Dataset</span>
        </a>
        <a class="resource-pill" href="https://arxiv.org/abs/2605.09591">
          <span class="resource-pill__mark"><img src="https://cdn.simpleicons.org/arxiv" alt="arXiv logo"></span>
          <span>arXiv</span>
        </a>
      </div>
    </td>
  </tr>
</table>


## Github Stats

<table class="stats-table" style="font-size:0.92em;">
  <tr>
    <td align="center">
 <img src="https://raw.githubusercontent.com/T-S-Liang/github-stats/master/generated/overview.svg" style="max-width:100%;height:auto;">
    </td>
    <td align="center">
  <img src="https://raw.githubusercontent.com/T-S-Liang/github-stats/master/generated/languages.svg" style="max-width:100%;height:auto;">
    </td>
  </tr>
</table>

## Selected Honors
<!-- <h2><b>Selected Honors</b></h2> -->
<style>
@media (max-width: 768px) {
  .text-table {
    width: 100% !important;
    display: block !important;
    box-sizing: border-box !important;
  }
  .text-table tbody {
    display: block !important;
    width: 100% !important;
  }
  .text-table tr {
    display: block !important;
    margin-bottom: 15px !important;
    border-bottom: 1px solid #e0e0e0 !important;
    padding-bottom: 10px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  .text-table td {
    display: block !important;
    width: 100% !important;
    text-align: left !important;
    padding: 5px 0 !important;
    box-sizing: border-box !important;
  }
  .text-table td:last-child {
    font-weight: bold !important;
    color: #666 !important;
  }
}
</style>

<table class="text-table" style="border:none;font-size:0.95em;">
  <tr>
    <td style="border:none;"><i>Outstanding Bachelor's Thesis at Wuhan University</i> (Top 5%, in the School of Physics and Technology).
    </td>
    <td style="border:none;text-align:center;">2024
    </td>
  </tr>

  <tr>
    <td style="border:none;"><i>First Class Scholarship</i> (Top 5%, for academic excellence) by Wuhan University.
    </td>
    <td style="border:none;text-align:center;">2021
    </td>
  </tr>
</table>

## Teaching and Review Services
<table class="text-table" style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:0;margin-left:0;font-size:0.95em;">
  <tr>
    <td style="padding:8px;width:70%;vertical-align:middle;border:none;"><b>Teaching Assistant</b>, ENGG1330 Computer Programming I, HKU
    </td>
    <td style="padding:8px;width:30%;vertical-align:right;border:none;"> 2025 Spring
    </td>
  </tr>  
  
  <tr>
    <td style="padding:8px;width:70%;vertical-align:middle;border:none;"><b>Teaching Assistant</b>, ELEC3644 Advanced Mobile Apps Development, HKU
    </td>
    <td style="padding:8px;width:30%;vertical-align:right;border:none;"> 2025 Fall
    </td>
  </tr>  
  
  </table>
  
## Selected Outreach and Service (Undergraduate)
<table class="text-table" style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:0;margin-left:0;font-size:0.95em;">
  <tr>
    <td style="padding:8px;width:70%;vertical-align:middle;border:none;"><b>Publicity Ambassador (Henan Province)</b>, Admission Office, Undergraduate College, Wuhan University
    </td>
    <td style="padding:8px;width:30%;vertical-align:right;border:none;"> Sept. 2021 - Jun. 2024
    </td>
  </tr>
  
  <tr>
    <td style="padding:8px;width:70%;vertical-align:middle;border:none;"><b>Minister</b>, Department of Press and Publicity, School of Physics and Technology, Wuhan University
    </td>
    <td style="padding:8px;width:30%;vertical-align:right;border:none;">July 2021 - July 2022
    </td>
  </tr>
  
  </table>

## Review
<style>
@media (max-width: 768px) {
  .review-container {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    padding: 0 10px !important;
  }
}
</style>
<div class="review-card">
<div class="review-container" style="width: 60%; margin: 0 auto; position: relative; z-index: 1000;">
<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=080808&w=a&t=tt&d=k7gt1qlb_lyshkDh7qppLdft9pS_Vjj_fgeQYAUGSBs&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=808080'></script>
</div>
</div>

## Interesting Facts About Myself

<ul class="facts-list">
  <li>In Chinese context, my name has the same meaning as the word "cool", referring to the pleasant weather of the season I was born. It is also a somewhat girly name, so people often mistake me as a girl before meeting me. My preferred name is Tim, which is my English name but not part of my legal name.</li>
  <li>I spent my childhood and adolescence along the majestic Yellow River, where the waters whispered tales of ancient civilizations. My college years unfolded beside the mighty Yangtze River, a flowing testament to China's enduring spirit and progress. Now, I find myself working beside the vibrant Pearl River, where the currents echo the pulse of modernity and innovation.</li>
  <li>Music takes up most of my free time. I listen to a wide range of styles, including country, J-rock, and Chinese folk, almost anything centered on guitar. I also enjoy pop, hip-hop, and EDM. I am a big fan of Taylor Swift, Adele, Billie Eilish, and Beyonce, and I am always happy to talk about music across different genres.</li>
  <li>During my undergraduate years at WHU, I also cultivated a deep passion for Chinese debate. I served as the captain of the School of Physics debate team (Class of 2020) and took the lead in organizing the "Xunli Debate" (寻理杯) competition during my time on campus.</li>
</ul>

<hr class="section-divider">
