import React from 'react'
import './Home.css'
import Logo from './images/logo.png'
import image from './images/kamell.PNG'; 

export default function Home() {
  return (
<div className='move'>

<div >

<h1 id="showstop"> 
 TUNIBLESS</h1>
 <h1 id="showstop"> 
<img className='logo' src={Logo} alt="Logo" />
 </h1>
<div id="content" class="container">
<p className='p2'>
من نحن ؟
 
  </p>
  <p className='edit'> 
  نحن جمعية غير ربحية مسجلة في ألمانيا, وضعت لنفسها مهمة دعم
  العائالت والشباب التونسي لإدماجهم في المجتمع
األلماني. تحث الجمعية الشباب علي تعلم
اللغة االلمانية و المشاركة في الأعمال التطوعية
اضافة الي تسهيل تواصله مع الشركات و
المؤسسات االلمانية هدفنا هو تمهيد الطريق لالندماج الناجح
والمساهمة في التواصل األلماني التونسي. كما نوفر
فرصا للتدريب المهني للتواصل مع الشباب تساعده
على احداث تغير فكري و ثقافي حتى يفتح ابوابا
جديدة للمستقبل 
  </p>
  <p className='p2'>
  :تاريخ نشأتنا

  </p>
  نحن مزيج من مهندسين وتقنيين و اعالميين
وإخصائيين في علم االجتماع وغيرهم ممن هاجروا
من تونس الي المانيا و الذين يعشون و يعملون منذ
عقود في المانيا. نريد تكريس خبراتنا لمساعدة
اآلخرين على هذاالتوجه 
 
  <p className='p2'>
  :المساعدة للإعتماد على النفس  
</p>
<p>
جمعيتنا تحمل شعار "المساعدة لإلعتماد على النفس
". نساعد األشخاص المؤهلين والملتزمين لبناء
مستقبلهم في ألمانيا و ندعمهم كجهة اتصال ووسيط
ونمدهم بالمعلومات الالزمة ونرشدهم إلى الطريق
الأنجع حسب خبراتنا وتجاربنا

</p>
  </div>
 
  <img className='kamel' src={image} alt="Logo" />
  <h1>كمال بن حميدة</h1>
  <h2 className='upp'>رئيس الجمعية

</h2>
<div class="button-container">

  <a href="https://690a9a10-6767-458e-9928-f6c8fc115802.filesusr.com/ugd/ea939d_51f407e620a74c6bad9333c9ab7be774.pdf">
    <button className='left-button'>تسجيل الجمعية
    
    </button>
</a>

         <a href="https://690a9a10-6767-458e-9928-f6c8fc115802.filesusr.com/ugd/ea939d_d21767626c66499fb6714afde2faa417.pdf">
    <button className='right-button'>القانون الأساسي</button>
</a>

</div>

<a href="https://www.facebook.com/TuniBless">

<button class="loginBtn loginBtn--facebook">
صفحتنا على الفايسبوك</button>
</a>

<h2 className='hhh' ><a className='hh' href="https://sites.google.com/view/ausbildungfuertunesier/">الإنخراط في الجمعية🔗</a></h2>

  </div>
  
    </div>
  )
}
